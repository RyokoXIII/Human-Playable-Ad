using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class GameUIManager : MonoBehaviour
{
    public static GameUIManager Instance;
    public GameObject canvasMain;
    [SerializeField] GameObject panelStart;
    public GameObject panelFighting;
    public GameObject popupEnding;
    public GameObject popupDefeat;

    [Header("-----Main UI-----")]
    public Text textCoin;
    public Image imgCoin;

    [Header("---Show Text---")]
    public GameObject prefabTextShow;
    public Transform tfText;

    [Header("---Icon Skin---")]
    public Sprite[] arIconSkinFulls;

    [Header("---Reward Skin---")]
    public GameObject popupGetSkin;
    public Image imageIconRewardSkin;
    public Button buttonGetSkin;

    private float durationLevel;

    private void Awake()
    {
        Application.targetFrameRate = 60;
        Input.multiTouchEnabled = false;
    }
    // Start is called before the first frame update
    void Start()
    {
        Instance = this;
        textCoin.text = "0";
    }

    // Update is called once per frame
    void Update()
    {
        if (PlayerController.Instance.isStart)
        {
            durationLevel += Time.deltaTime;
        }

        //if (Input.GetKeyDown(KeyCode.D))
        //{
        //    popupChest.SetActive(true);
        //}
    }
    public void UpdateTextCoin(int amout)
    {
        GameManager.Instance.totalCoin = amout;
        textCoin.DOText(amout.ToString(), 0.1f, true, ScrambleMode.Numerals).SetEase(Ease.Linear);
        textCoin.transform.DOScale(Vector3.one * 1f, 0.05f).SetLoops(2, LoopType.Yoyo).SetEase(Ease.Linear);
        imgCoin.transform.DOScale(Vector3.one * 1.3f, 0.05f).SetLoops(2, LoopType.Yoyo).SetEase(Ease.Linear);
    }
    
    public void OnCickStartGame()
    {
        //Debug.Log("start game");
        PlayerController.Instance.isStart = true;
        this.PostEvent((int)EventID.OnCharRun);
        panelStart.SetActive(false);
    }
    public void ShowPopupEnding(float delay)
    {
        PlayerController.Instance.isStart = false;

        if (SoundController.Instance.audioMusic.isPlaying)
        {
            SoundController.Instance.audioMusic.Stop();
        }

        StartCoroutine(CoShowPopupEnding(delay));
    }

    public GameObject installContainer;

    IEnumerator CoShowPopupEnding(float delay)
    {
        yield return new WaitForSeconds(delay);
        panelFighting.SetActive(false);
        popupEnding.SetActive(true);
        installContainer.SetActive(false);

        Luna.Unity.LifeCycle.GameEnded();
    }

    public void ShowPopupDefeat(float delay)
    {
        StartCoroutine(CoShowPopupDefeat(delay));
    }
    IEnumerator CoShowPopupDefeat(float delay)
    {
        yield return new WaitForSeconds(delay);
        panelFighting.SetActive(false);
        popupDefeat.SetActive(true);
    }

    GameObject tempText;
    float tempTimeShowText = 0;

    public void ShowText(string st, Vector3 pos)
    {
        if (Time.time - tempTimeShowText < .5f)
            return;

        tempTimeShowText = Time.time;
        tempText = Instantiate(prefabTextShow, tfText);
        tempText.transform.localPosition = pos;
        tempText.transform.GetComponent<Text>().text = st;
        tempText.transform.DOScale(new Vector3(1.1f, 1.1f, 1f), .05f).SetEase(Ease.InCubic).OnComplete(() =>
        {
            tempText.transform.DOScale(new Vector3(1f, 1f, 1f), .2f);
        });
        pos.y += 200;
        tempText.transform.DOLocalMove(pos, 1f).SetEase(Ease.InCubic).OnComplete(() =>
        {
            Destroy(tempText, 1f);
        });
        tempText.transform.GetComponent<Text>().DOColor(new Color(1, 1, 1, 0), .5f).SetDelay(.8f);
        tempText.transform.GetComponent<Outline>().DOColor(new Color(1, 1, 1, 0), .5f).SetDelay(.8f);
    }

    int installClick = 0;

    public void ButtonDownload()
    {
        installClick++;
        Luna.Unity.Playable.InstallFullGame();
        Luna.Unity.Analytics.LogEvent("download_click", installClick);
    }

    int ctaClick = 0;

    public void ButtonDirectToStore()
    {
        ctaClick++;
        Luna.Unity.Playable.InstallFullGame();
        Luna.Unity.Analytics.LogEvent("cta_click", ctaClick);
    }

    #region reward skin
    public void OnClickGetSkin()
    {
        popupGetSkin.SetActive(false);
    }
    #endregion
}
