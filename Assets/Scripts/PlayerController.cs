using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using UnityEngine.EventSystems;

public enum Direction
{
    Forward, Left, Right
}
public class PlayerController : MonoBehaviour
{
    public static PlayerController Instance;
    [SerializeField] GameObject mainCamera;
    public int currentScore;
    private int minScore = 100;
    public int currentMultiID;

    [Header("-----UI-----")]
    [SerializeField] Text textScore;
    [SerializeField] Text textMultiplier;

    [Header("-----Movement-----")]
    public float moveSpeed;
    public float sensitivity = 0.1f;
    public float MaxDistance, DistanceScale, ScreenSwipeScale;
    private float mouseLastPosX;
    private bool isPress = false, isTurn = false;
    public bool isStart = false, isEnding = false, isCelebrate = false;
    float borderX;

    [Header("-----Animation-----")]
    public Animator playerAnim;
    public List<Animator> listCharAnim;

    [Header("-----Character-----")]
    public GameObject[] arrCharacters;
    public GameObject currentChar;
    private bool isGetItem = false;
    public int currentCharID;
    public int currentEnemySkinID;

    public int level = 0;
    public int skinID = 0;

    [Header("-----FX-----")]
    public ParticleSystem fx_confetti;
    public List<ParticleSystem> listFXtransformChar;

    public Transform pointEnd;

    // Start is called before the first frame update
    void Start()
    {
        Instance = this;
        minScore = 100;
        InitCharacter();
    }

    public GameObject panelTap, tapToAttackHint;
    bool isTap = false;

    public void TapToAttackMenu()
    {
        if (isTap == false)
        {
            //Luna.Unity.LifeCycle.GameEnded();
            panelTap.SetActive(true);
            tapToAttackHint.SetActive(true);
            Time.timeScale = 0f;
            isTap = true;
        }
    }

    public void ClickToAttack()
    {
        Time.timeScale = 1f;
        panelTap.SetActive(false);
    }


    void Update()
    {
        if (isStart)
        {
            if (transform.position.z < MapManager.Instance.pointEnd.position.z)
            {
                transform.Translate(Vector3.forward * Time.deltaTime * moveSpeed, Space.World);
            }
            else
            {
                if (!isEnding)
                    ShowEnding();
            }
        }

        if (!isEnding)
        {
            //if (!IsMouseOverUI())
            //{
            if (Input.GetMouseButtonDown(0))
            {
                mouseLastPosX = Input.mousePosition.x;
                isPress = true;
            }
            if (Input.touchCount > 0 &&
        Input.GetTouch(0).phase == TouchPhase.Ended || Input.GetMouseButton(0))
            {
                if (isPress == true)
                {
                    if (!isTurn)
                    {
                        float tempPosX = Input.mousePosition.x;
                        Vector3 direction = new Vector3(sensitivity * ((tempPosX - mouseLastPosX) / ScreenSwipeScale), 0, 0);
                        transform.Translate(direction);

                        if (direction.normalized != Vector3.zero)
                        {
                            if (direction.x > 0)
                                transform.DORotate(new Vector3(0, 15, 0), 0.2f);
                            else
                                transform.DORotate(new Vector3(0, -15, 0), 0.2f);
                        }
                        else
                        {
                            transform.DORotate(Vector3.zero, 0.2f);
                        }

                        if (transform.position.x < -borderX)
                            transform.position = new Vector3(-borderX, transform.position.y, transform.position.z);
                        if (transform.position.x > borderX)
                            transform.position = new Vector3(borderX, transform.position.y, transform.position.z);
                        mouseLastPosX = tempPosX;
                    }
                }
            }

            if (Input.GetMouseButtonUp(0))
            {
                transform.DORotate(Vector3.zero, 0.2f);
                isPress = false;
            }
            //}
        }

        if (isEnding)
        {
            currentScore -= (int)Time.deltaTime * 100;
            textScore.text = currentScore.ToString();
        }
    }

    public void UpdateStartScore()
    {
        currentScore = 100;
        textScore.text = currentScore.ToString();
    }

    public void InitCharacter()
    {
        borderX = 1.3f;
        UpdateStartScore();
        this.PostEvent((int)EventID.OnLoadSkin);
        currentChar = arrCharacters[0];

        playerAnim = transform.GetChild(0).GetComponent<Animator>();
        DistanceScale = MaxDistance / sensitivity;
        ScreenSwipeScale = (Screen.width / 3) / DistanceScale;
    }

    private void OnTriggerEnter(Collider other)
    {
        if (!isGetItem && other.CompareTag("Item"))
        {
            GetItem(other.GetComponent<ItemController>());
            isGetItem = true;
            StartCoroutine(CoWaitGetItem(0.5f, other.gameObject));
        }

        if (!isGetItem && other.CompareTag("ItemX3"))
        {
            GetX3Item();
            isGetItem = true;
            StartCoroutine(CoWaitGetItem(0.5f, other.gameObject));
        }
    }
    IEnumerator CoWaitGetItem(float delay, GameObject obj)
    {
        yield return new WaitForSeconds(delay);
        isGetItem = false;
        yield return new WaitForSeconds(delay);
        Destroy(obj);

    }
    public void GetItem(ItemController item)
    {
        Color color = Color.green;
        float multiply = 1;
        switch (item.typeCalculate)
        {
            case TypeCalculate.Plus:
                currentScore += item.totalTime;
                color = Color.green;
                multiply = 1.4f;
                break;
            case TypeCalculate.Minus:
                currentScore -= item.totalTime;
                color = Color.red;
                multiply = 1;
                break;
            case TypeCalculate.Multiply:
                currentScore *= item.totalTime;
                color = Color.green;
                multiply = 1.4f;
                break;
            case TypeCalculate.Divide:
                currentScore /= item.totalTime;
                color = Color.red;
                multiply = 1;
                break;
        }
        if (currentScore < minScore) currentScore = minScore;

        UpdateTextScore(color, multiply);
        LoadSkinByScore();
    }
    public void UpdateTextScore(Color color, float multiply)
    {
        textScore.DOText(currentScore.ToString(), 0.5f, true, ScrambleMode.Numerals).SetEase(Ease.Linear);
        textScore.DOColor(color, 0.3f).OnComplete(() => textScore.DOColor(Color.white, 0.2f));
        textScore.transform.DOScale(Vector3.one * multiply, 0.3f).OnComplete(() => textScore.transform.DOScale(Vector3.one * 1, 0.3f));
    }

    public List<DataCharacter> dataCharacters;

    public void LoadSkinByScore()
    {
        int skinID = 0;

        for (int i = dataCharacters.Count - 1; i >= 0; i--)
        {
            if (currentScore >= dataCharacters[i].time)
            {
                skinID = i;
                break;
            }
        }

        if (currentCharID != skinID)
        {
            if (isStart)
            {

            }
            currentCharID = skinID;
            this.PostEvent((int)EventID.OnCharRun);
            this.PostEvent((int)EventID.OnEnemyLoadSkin);

            this.PostEvent((int)EventID.OnLoadSkin);
        }
    }

    public GameObject cloneChar;

    public void GetX3Item()
    {
        for (int i = 0; i < 2; i++)
        {
            GameObject goChar = Instantiate(cloneChar, transform);
            goChar.transform.localPosition = new Vector3(-0.5f + i, 0, 0);
            goChar.transform.localScale = Vector3.zero;
            goChar.transform.DOScale(transform.GetChild(0).localScale, 0.3f);

            this.PostEvent((int)EventID.OnLoadSkin);
        }
        this.PostEvent((int)EventID.OnCharRun);

        borderX = 0.8f;
    }
    public int MultiID()
    {
        //List<DataMultiplier> dataMultipliers = DataManager.Instance.dataMultiplier;
        int multiID = 0;
        //for (int i = dataMultipliers.Count - 1; i >= 0; i--)
        //{
        //    if(currentScore >= dataMultipliers[i].time)
        //    {
        //        multiID = i;
        //        break;
        //    }
        //}
        return multiID;
    }
    public float GetTimeMoveMulti(int multiID)
    {
        return (multiID + 1) * 0.7f;
    }

    public void ShowEnding()
    {
        isEnding = true;

        if (MapManager.Instance.isMapBoss)
        {            
            textScore.transform.parent.DOScale(Vector3.zero, 0.2f).SetEase(Ease.Linear);
            //GameUIManager.Instance.goLevelProgress.SetActive(false);
            transform.DORotate(Vector3.zero, 0.2f);
            transform.DOMove(new Vector3(0, 0.1f, MapManager.Instance.boss.transform.GetChild(1).position.z - 1.7f), 1).SetEase(Ease.Linear).OnComplete(() => FightingBoss());
        }
        //else
        //{
        //    this.PostEvent((int)EventID.OnChangeDistanceHitbox);
        //    Time.timeScale = 2;
        //    transform.DOMove(new Vector3(0, 0.1f, MapManager.Instance.pointEnd.position.z + 1), 0.5f).SetEase(Ease.Linear);
        //    transform.DORotate(Vector3.zero, 0.2f);
        //    int multiID = Mathf.Clamp(MultiID() - 1, 0, MapManager.Instance.listMultis.Count - 1);
        //    transform.DOMoveZ(MapManager.Instance.listMultis[MultiID()].transform.position.z, GetTimeMoveMulti(MultiID())).SetDelay(0.5f).SetEase(Ease.Linear).OnComplete(() => ShowCelebration());
        //    StartCoroutine(ChangeSpeed(currentScore, 100, GetTimeMoveMulti(MultiID())));
        //}
    }

    IEnumerator ChangeSpeed(int v_start, int v_end, float duration)
    {
        float elapsed = 0.0f;
        while (elapsed < duration)
        {
            currentScore = (int)Mathf.Lerp(v_start, v_end, elapsed / duration);
            elapsed += Time.deltaTime;
            yield return null;
        }
        currentScore = v_end;
        textScore.text = currentScore.ToString();
    }

    public void ShowCelebration()
    {
        SoundController.Instance.PlaySoundByClip(SoundController.Instance.sound_bravo);

        isCelebrate = true;
        Time.timeScale = 1;
        Time.fixedDeltaTime = 0.02F * Time.timeScale;

        this.PostEvent((int)EventID.OnVictory);
        fx_confetti.transform.position = new Vector3(0, 5, transform.position.z);
        fx_confetti.Play();
        GameUIManager.Instance.ShowPopupEnding(1.5f);
    }

    public FighterController boss, player;

    #region fighting boss
    public void FightingBoss()
    {
        isEnding = true;

        Debug.Log("FightingBoss");

        Time.timeScale = 1;
        boss.opponent = player;
        boss.totalHP = dataCharacters[boss.fighterID].hp;
        boss.dps = dataCharacters[boss.fighterID].dps;
        boss.currentHP = boss.totalHP;
        boss.hpBar = PanelFighting.Instance.hpBarEnemy;
        boss.hpBar.transform.GetChild(0).GetComponent<Image>().fillAmount = 1;
        boss.isBoss = true;

        player.opponent = boss;
        player.totalHP = dataCharacters[currentCharID].hp;
        player.dps = dataCharacters[currentCharID].dps;
        player.currentHP = player.totalHP;
        player.hpBar = PanelFighting.Instance.hpBarPlayer;
        player.hpBar.transform.GetChild(0).GetComponent<Image>().fillAmount = 1;
        player.isBoss = false;

        mainCamera.GetComponent<CameraFollow>().enabled = false;
        mainCamera.transform.DOMove(boss.transform.GetChild(0).position, 1);
        TapToAttackMenu();
        mainCamera.transform.DORotate(boss.transform.GetChild(0).eulerAngles, 1);
        GameUIManager.Instance.panelFighting.SetActive(true);
        StartCoroutine(CoStartFight(0));
    }
    IEnumerator CoStartFight(float delay)
    {
        yield return new WaitForSeconds(delay);
        this.PostEvent((int)EventID.OnAttackBoss);
        this.PostEvent((int)EventID.OnFightBegin);
    }
    #endregion

    #region data character skin
    //public class ListDataCharacter
    //{
    //    public List<DataCharacter> dataCharacters;
    //}

    [System.Serializable]
    public class DataCharacter
    {
        public int id;
        public float time;
        public int hp;
        public int dps;

        public DataCharacter dataCharacter;
    }
    #endregion

    #region check over UI
    public bool IsMouseOverUI()
    {
        if (Application.platform == RuntimePlatform.WindowsEditor || Application.platform == RuntimePlatform.OSXEditor)
        {
            return EventSystem.current.IsPointerOverGameObject();
        }
        else
        {
            //return EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId);
            return IsPointerOverUIObject();
        }
    }
    private bool IsPointerOverUIObject()
    {
        PointerEventData eventDataCurrentPosition = new PointerEventData(EventSystem.current);
        eventDataCurrentPosition.position = new Vector2(Input.mousePosition.x, Input.mousePosition.y);
        List<RaycastResult> results = new List<RaycastResult>();
        EventSystem.current.RaycastAll(eventDataCurrentPosition, results);
        return results.Count > 0;
    }
    #endregion
}
