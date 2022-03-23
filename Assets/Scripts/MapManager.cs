using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;


public class MapManager : MonoBehaviour
{
    public static MapManager Instance;
    //[HideInInspector]
    public Transform pointEnd;
    public bool isMapBoss;
    public FighterController boss;
    [Header("-----Multiplier-----")]
    public Transform tfMulti;
    public GameObject prefabMulti, prefabEnemy;
    public List<GameObject> listMultis;
    public GameObject ground;

    // Start is called before the first frame update
    void Start()
    {
        Instance = this;
        LoadCurrentMap();

        ground.GetComponent<MeshRenderer>().material.mainTextureScale = new Vector2(1, ground.transform.localScale.z / 4);
    }

    public GameObject level;
    public GameObject[] arrEnemies;
    public Camera main;
    public GameUIManager uiManager;

    public void LoadCurrentMap()
    {
        //int mapID = 5;

        foreach(GameObject enemy in arrEnemies)
        {
            enemy.transform.position -= new Vector3(0, 0.1f, 0);
        }

        //if ((mapID + 5) % 10 == 0)
        //{
        //    isMapBoss = true;
        //    boss = GameObject.FindGameObjectWithTag("Boss").GetComponent<FighterController>();
        //    boss.transform.position = pointEnd.position + new Vector3(0, 0.1f, 3);
        //    boss.gameObject.SetActive(true);
        //    for (int i = 0; i < 2; i++)
        //    {
        //        GameObject boss = GameObject.FindGameObjectWithTag("Boss");
        //        GameObject goBoss = Instantiate(boss.transform.GetChild(1).gameObject, boss.transform);
        //        goBoss.transform.localPosition = new Vector3(-0.5f + i, boss.transform.GetChild(1).localPosition.y, boss.transform.GetChild(1).localPosition.z);
        //        goBoss.transform.localScale = boss.transform.GetChild(1).localScale;
        //    }
        //    //GameUIManager.Instance.canvasMain.SetActive(false);
        //    //Camera.main.GetComponent<CameraFollow>().enabled = false;            
        //    //Camera.main.transform.position = new Vector3(0, 2, boss.transform.position.z + 7);
        //    //Camera.main.transform.DOMove(new Vector3(0, 3, -4), 2.5f).OnComplete(() =>
        //    //{
        //    //    Camera.main.GetComponent<CameraFollow>().enabled = true;
        //    //    GameUIManager.Instance.canvasMain.SetActive(true);
        //    //}).SetDelay(1);
        //}
        //else
        //{
        //    isMapBoss = false;
        //    InitBonusMap();
        //}

        isMapBoss = true;
        boss.transform.position = pointEnd.position + new Vector3(0, 0.1f, 3);
        boss.gameObject.SetActive(true);

        for (int i = 0; i < 2; i++)
        {
            GameObject boss = GameObject.FindGameObjectWithTag("Boss");
            GameObject goBoss = Instantiate(boss.transform.GetChild(1).gameObject, boss.transform);
            goBoss.transform.localPosition = new Vector3(-0.5f + i, boss.transform.GetChild(1).localPosition.y, boss.transform.GetChild(1).localPosition.z);
            goBoss.transform.localScale = boss.transform.GetChild(1).localScale;
        }
        uiManager.canvasMain.SetActive(false);
        main.GetComponent<CameraFollow>().enabled = false;
        main.transform.position = new Vector3(0, 2, boss.transform.position.z + 7);
        main.transform.DOMove(new Vector3(0, 3, -4), 2.5f).OnComplete(() =>
        {
            main.GetComponent<CameraFollow>().enabled = true;
            uiManager.canvasMain.SetActive(true);
        }).SetDelay(1);

        //InitDecor(mapID);
    }

    //public void InitBonusMap()
    //{
    //    //Debug.Log("InitBonusMap");
    //    //Debug.Log("pointEnd " + pointEnd.transform.position);
    //    tfMulti.position = new Vector3(0, 0.01f, pointEnd.position.z + 6);
    //    //Debug.Log("tfMulti " + tfMulti.transform.position);

    //    for (int i = 0; i < DataManager.Instance.dataMultiplier.Count; i++)
    //    {
    //        GameObject goMulti = Instantiate(prefabMulti, tfMulti);
    //        goMulti.name = "Multi " + i;
    //        goMulti.transform.localPosition = new Vector3(0, 0, 3 * i);
    //        goMulti.GetComponent<MultiController>().LoadMulti(i);
    //        listMultis.Add(goMulti);
    //        GameObject goEnemy = Instantiate(prefabEnemy, goMulti.transform);
    //        goEnemy.GetComponent<EnemyController>().isMulti = true;
    //        goEnemy.transform.localPosition = new Vector3(0, 0.1f, 0);
    //    }
    //}

    //public GameObject[] decors;

    //public void InitDecor(int mapID)
    //{
    //    for(int i = 0; i < 3; i++)
    //    {
    //        int rand = Random.Range(0, 3);
    //        GameObject go_decor = decors[rand];
    //        GameObject goDecor = Instantiate(go_decor, tfDecor);
    //        if (Random.Range(0, 2) == 0)
    //        {
    //            goDecor.transform.position = new Vector3(goDecor.transform.position.x, goDecor.transform.position.y, 50 * (i + 1));
    //        }
    //        else
    //        {
    //            if(rand == 3)
    //            {
    //                goDecor.transform.position = new Vector3(goDecor.transform.position.x, goDecor.transform.position.y, 50 * (i + 1));
    //            }
    //            else
    //            {
    //                goDecor.transform.position = new Vector3(-goDecor.transform.position.x, goDecor.transform.position.y, 50 * (i + 1));
    //                goDecor.transform.eulerAngles = new Vector3(0, -goDecor.transform.eulerAngles.y, 0);
    //            }
    //        }
    //    }
    //}
}
