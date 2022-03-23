using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;


public class FighterController : MonoBehaviour
{
    public int fighterID;
    //[HideInInspector]
    public float totalHP;
    //[HideInInspector]
    public float dps;
    //[HideInInspector]
    public float currentHP;
    public GameObject hpBar;
    public FighterController opponent;
    public Transform tfChar;
    public bool isBoss;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {

    }

    private void OnEnable()
    {
        this.RegisterListener((int)EventID.OnFightBegin, OnBeginFighting);

    }
    private void OnDisable()
    {
        if (EventDispatcher.Instance != null)
        {
            EventDispatcher.Instance.RemoveListener((int)EventID.OnFightBegin, OnBeginFighting);
        }
    }

    public void OnBeginFighting(object obj)
    {
        Invoke("AttackByTime", 0.7f);
        //AttackByTime();
    }
    public void OnBeHit(float damage)
    {
        //Debug.Log("OnBeHit");
        currentHP -= damage;
        hpBar.transform.GetChild(1).GetComponent<Image>().DOFillAmount(currentHP / totalHP, 0.4f).SetEase(Ease.OutCubic);
        hpBar.transform.GetChild(0).GetComponent<Image>().DOFillAmount(currentHP / totalHP, 0.2f).SetEase(Ease.OutCubic).SetDelay(0.7f);

        //GameObject goHPLost = (GameObject)Resources.Load("Prefabs/UI/Text HP Lost", typeof(GameObject));
        GameObject goHPLost = Instantiate(GameManager.Instance.prefabHpLost, GameManager.Instance.panelFighting);
        goHPLost.SetActive(true);
        goHPLost.transform.localScale = Vector3.one;
        goHPLost.GetComponent<Text>().text = "-" + damage;
        goHPLost.transform.position = Camera.main.WorldToScreenPoint(tfChar.position) + new Vector3(0, 300, 0);
        goHPLost.transform.DOLocalJump(goHPLost.transform.localPosition + new Vector3(100, 0, 0), 100, 1, 0.8f).SetEase(Ease.Linear);
        goHPLost.transform.DOScale(0, 0.3f).SetDelay(0.7f).SetEase(Ease.Linear).OnComplete(() => goHPLost.gameObject.SetActive(false));
        if (currentHP <= 0)
            OnDefeat();
    }

    public void OnDefeat()
    {
        if (isBoss)
        {
            Debug.Log("win");
            StartCoroutine(CoTimeScale(1));
            Camera.main.gameObject.SetActive(false);
            transform.GetChild(0).gameObject.SetActive(true);
            transform.GetChild(1).GetComponent<CharacterController>().isDefeat = true;
            transform.GetChild(1).GetComponent<CharacterController>().fx_hitted.gameObject.SetActive(false);

            this.PostEvent((int)EventID.OnFightDefeat);
            this.PostEvent((int)EventID.OnStopAllCoroutines);

            StartCoroutine(CoWaitCameraWin());
        }
        else
        {
            Debug.Log("lose");
            StartCoroutine(CoTimeScale(1));

            this.PostEvent((int)EventID.OnTurnOffAllSkin);
            this.PostEvent((int)EventID.OnStopAllCoroutines);

            Camera.main.gameObject.SetActive(false);
            opponent.transform.GetChild(0).gameObject.SetActive(true);
            opponent.transform.GetChild(0).GetComponent<CameraFollow>().enabled = false;
            opponent.transform.GetChild(0).transform.DOLocalMove(new Vector3(-4.5f, 3.8f, -8.2f), 0.5f).SetEase(Ease.Linear);
            opponent.transform.GetChild(0).transform.DOLocalRotate(new Vector3(30, 90, 0), 0.5f).SetEase(Ease.Linear);

            //Camera.main.transform.DOLocalMove(new Vector3(-4.5f, 3.8f, -8.2f), 0.5f).SetEase(Ease.Linear);
            //Camera.main.transform.DOLocalRotate(new Vector3(30, 90, 0), 0.5f).SetEase(Ease.Linear);
            this.PostEvent((int)EventID.OnDefeat);
            GameUIManager.Instance.ShowPopupDefeat(2);
        }
    }

    public FighterController obj;

    IEnumerator CoWaitCameraWin()
    {
        yield return new WaitForSeconds(2);
        transform.GetChild(0).GetComponent<CameraFollow>().enabled = false;
        transform.GetChild(0).transform.DOLocalMove(new Vector3(-2.5f, 3, -11), 0.8f).SetEase(Ease.Linear);
        transform.GetChild(0).transform.DOLocalRotate(new Vector3(30, 45, 0), 0.8f).SetEase(Ease.Linear);
        SoundController.Instance.PlaySoundByClip(SoundController.Instance.sound_bravo);

        this.PostEvent((int)EventID.OnVictory);
        GameUIManager.Instance.ShowPopupEnding(1.5f);
        yield return new WaitForSeconds(0.5f);
        obj.enabled = false;
    }
    IEnumerator CoWaitCameraLose()
    {
        yield return new WaitForSeconds(2);

    }
    public void AttackByTime()
    {
        StartCoroutine(CoAttackByTime(0.7f));
    }
    IEnumerator CoAttackByTime(float delay)
    {
        this.PostEvent((int)EventID.OnShowFxHitted);

        if(currentHP > 0)
            opponent.OnBeHit(dps);

        if (opponent.currentHP <= 0)
        {
            Debug.Log("last hit");
            Time.timeScale = 0.7f;
            Time.fixedDeltaTime = 0.02F * Time.timeScale;
            tapToAttackHint.SetActive(false);
        }
        yield return new WaitForSeconds(delay);
        if (opponent.currentHP > 0 && currentHP > 0)
            StartCoroutine(CoAttackByTime(delay));
    }

    public GameObject tapToAttackHint;

    public void CheckLastHit()
    {
        if (opponent.currentHP > 0 && currentHP > 0 && dps >= opponent.currentHP)
        {
            Debug.Log("last hit");
            tapToAttackHint.SetActive(false);
            Time.timeScale = 0.7f;
            Time.fixedDeltaTime = 0.02F * Time.timeScale;

        }
    }
    IEnumerator CoTimeScale(float delay)
    {
        yield return new WaitForSeconds(delay);
        Time.timeScale = 1;
        Time.fixedDeltaTime = 0.02F * Time.timeScale;

    }
}
