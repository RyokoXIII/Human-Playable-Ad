using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class PopupEnding : MonoBehaviour
{
    public static PopupEnding Instance;
    public Button buttonNextLevel;

    public Text textTotalReward;
    public Text textDefaultReward;

    public RectTransform rectTransformNeedle;

    public AnimationCurve animCurveNeedle;    

    private Tween tweenNeedleRotate;

    public int totalReward;

    [Header("-----Skin Reward-----")]
    public GameObject goSkinReward;
    public Image fillSkinReward;
    public Text textFillReward;
    public GameManager manager;

    // Start is called before the first frame update
    void Start()
    {
        Instance = this;
        buttonNextLevel.onClick.AddListener(ButtonDirectToStore);        

        buttonNextLevel.transform.localScale = Vector3.zero;
        buttonNextLevel.transform.DOScale(Vector3.one, 0.5f).SetDelay(1f);
        //float multi = 1 + PlayerController.Instance.currentMultiID * 0.1f;
        //totalReward = Mathf.RoundToInt((GameManager.Instance.rewardCoin + 50) * multi *
        //    DataManager.Instance.dataUpgrades[Database.instance.database.currentUpgradeIncome].income);
        totalReward = Mathf.RoundToInt(manager.rewardCoin + 50);
        textDefaultReward.text = totalReward.ToString();

        Luna.Unity.LifeCycle.GameEnded();
        Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.EndCardShown);
        //Open();

    }

    // Update is called once per frame
    void Update()
    {
        //float angle = rectTransformNeedle.localEulerAngles.z;
        //if (angle > 180f) angle = angle - 360f;

        //if (angle > 18f) spinMutiply = 2;
        //else if (angle > -41f) spinMutiply = 3;
        //else if (angle > -78f) spinMutiply = 4;
        //else spinMutiply = 5;
        //Debug.Log(spinMutiply);
        //if (prevSpinMutiply != spinMutiply)
        //{
        //    prevSpinMutiply = spinMutiply;
        //    //textMultiply.text = "x" + spinMutiply.ToString();
        //    textTotalReward.text = (totalReward * spinMutiply).ToString();
        //}
    }

    public void OnClickNextLevel()
    {
        if (tweenNeedleRotate != null && tweenNeedleRotate.IsActive())
            tweenNeedleRotate.Kill();

        buttonNextLevel.interactable = false;        
    }

    public void Open()
    {
        gameObject.SetActive(true);        
        goSkinReward.SetActive(false);
        //goSkinReward.SetActive(!GameManager.Instance.isFullRewardSkin());
        //if (!GameManager.Instance.isFullRewardSkin())
        //    ShowSkinReward();

        rectTransformNeedle.localEulerAngles = Vector3.zero;
        tweenNeedleRotate = rectTransformNeedle.DORotate(new Vector3(0f, 0f, 90f), 1.7f).SetEase(animCurveNeedle).SetLoops(-1);
    }

    public void Close()
    {
        gameObject.SetActive(false);

        if (tweenNeedleRotate != null && tweenNeedleRotate.IsActive())
            tweenNeedleRotate.Kill();
    }

    public void ShowSkinReward()
    {
        //float rewardProgress = (float)(Database.instance.database.currentLevel % 3) / 3;
        //if (rewardProgress == 0) rewardProgress = 1;
        //fillSkinReward.fillAmount = 0;
        //textFillReward.DOText((int)(rewardProgress * 100) + "%", 0.5f, true, ScrambleMode.Numerals).SetEase(Ease.Linear);
        //fillSkinReward.DOFillAmount(rewardProgress, 0.5f).SetEase(Ease.Linear).OnComplete(()=> { 
        //    if(Database.instance.database.currentLevel % 3 == 0)
        //    {
        //        transform.GetChild(0).gameObject.SetActive(false);
        //    }
        //});
    }
    
    int ctaClick = 0;

    public void ButtonDirectToStore()
    {
        ctaClick++;
        Luna.Unity.Playable.InstallFullGame();
        Luna.Unity.Analytics.LogEvent("cta_click", ctaClick);
    }
}
