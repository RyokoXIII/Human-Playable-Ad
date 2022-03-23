using UnityEngine;
using DG.Tweening;
using System.Collections;

public class EnemyController : MonoBehaviour
{
    public Rigidbody[] allRig;
    public bool isKnockout = false;
    public GameObject[] arEnemySkin;
    Vector3 dirFly;
    int currentEnemySkinID;

    public bool isMulti = false;

    
    void Start()
    {
        allRig = GetComponentsInChildren<Rigidbody>();
        foreach (Rigidbody rig in allRig)
            rig.isKinematic = true;

        dirFly = new Vector3(-10, 5, 5);

        Color[] arColors = new Color[] { new Color32(198, 65, 59, 255), new Color32(0, 92, 179, 255), new Color32(0, 180, 0, 255), new Color32(200, 186, 0, 255) };
        //transform.GetChild(0).GetComponent<SkinnedMeshRenderer>().material.color = Random.ColorHSV(0f, 1f, 1f, 1f, 1, 1f);
        transform.GetChild(0).GetComponent<SkinnedMeshRenderer>().material.color = arColors[Random.Range(0, arColors.Length)];
        //OnLoadSkin(null);

        if (!isMulti)
        {
            GetComponent<Animator>().Play("idle" + Random.Range(1, 3));
        }
    }


    void Update()
    {
        RaycastHit hit;
        Debug.DrawRay(transform.position + Vector3.up, transform.forward * 3, Color.red);
        if (Physics.Raycast(transform.position + Vector3.up, transform.forward, out hit, 3))
        {
            if (hit.collider.CompareTag("Main"))
            {
                if (!isMulti)
                    GetComponent<Animator>().SetTrigger("bot_punch");
            }
        }
    }

    private void OnEnable()
    {
        this.RegisterListener((int)EventID.OnEnemyLoadSkin, OnLoadSkin);
    }
    private void OnDisable()
    {
        if (EventDispatcher.Instance != null)
        {
            EventDispatcher.Instance.RemoveListener((int)EventID.OnEnemyLoadSkin, OnLoadSkin);
        }
    }

    public void OnLoadSkin(object obj)
    {
        if (arEnemySkin.Length > 0)
        {
            for (int i = 0; i < arEnemySkin.Length; i++)
            {
                arEnemySkin[i].gameObject.SetActive(false);
            }

            //int skinID = 0;
            //if (PlayerController.Instance != null)
            //{
            //    if (PlayerController.Instance.currentScore < 100)
            //    {
            //        skinID = 0;
            //    }
            //    else
            //    {
            //        skinID = 1;
            //    }
            //    if (PlayerController.Instance.currentCharID / arEnemySkin.Length)
            //}

            //int skinID = PlayerController.Instance.currentCharID / arEnemySkin.Length;
            int skinID;
            if (PlayerController.Instance.currentCharID < 2)
                skinID = 0;
            else if (PlayerController.Instance.currentCharID < 6)
                skinID = 1;
            else if (PlayerController.Instance.currentCharID < 8)
                skinID = 2;
            else
                skinID = 3;


            arEnemySkin[skinID].gameObject.SetActive(true);
            //Debug.Log(skinID + " " + PlayerController.Instance.currentEnemySkinID);
            if (skinID != currentEnemySkinID)
            {
                arEnemySkin[skinID].transform.localScale = Vector3.zero;
                arEnemySkin[skinID].transform.DOScale(Vector3.one, 0.2f);
            }

            currentEnemySkinID = skinID;
        }
    }

    public void Knockout(bool isShot)
    {
        isKnockout = true;
        GameManager.Instance.ShowCoinFX(transform.position + new Vector3(0, 0.1f, 1));
        GetComponent<Animator>().enabled = false;
        GetComponent<BoxCollider>().enabled = false;
        foreach (Rigidbody rig in allRig)
        {
            rig.isKinematic = false;
            if (isShot)
                rig.AddForce(new Vector3(0, 5, 5), ForceMode.Impulse);
            else
                rig.AddForce(dirFly, ForceMode.Impulse);
        }
        dirFly = Vector3.zero;
        StartCoroutine(BotDied());

        //Camera.main.transform.GetComponent<Shake>().start = true;

        //if (PlayerController.Instance.isEnding)
        //{
        //    PlayerController.Instance.ShowTextMultiplier();
        //}
    }

    IEnumerator BotDied()
    {
        yield return new WaitForSeconds(1.5f);
        Destroy(gameObject);
    }
}
