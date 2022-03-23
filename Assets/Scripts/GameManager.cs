using System.Collections;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;
    //public CharacterDatas characterDatas;
    public int rewardCoin;
    public int totalCoin;
    [Header("-----Fighting-----")]
    public Transform panelFighting;
    public GameObject prefabHpBar, prefabHpLost;

    [Header("-----FX-----")]
    public Transform tfFX;
    public GameObject fx_coin_blast;
    public GameObject fx_coin_blast_UI;
    //public Transform tfCoinBlast;

    // Start is called before the first frame update
    void Start()
    {
        Instance = this;
        //SoundController.Instance.PlayMusicBgr();

        totalCoin = 0;
    }

    // Update is called once per frame
    void Update()
    {

    }

    #region FX
    public void ShowCoinFX(Vector3 pos)
    {
        GameObject goFX = SCR_Pool.GetFreeObject(fx_coin_blast.gameObject);
        goFX.transform.parent = tfFX;

        goFX.transform.localPosition = pos;
        StartCoroutine(CoDisableObject(goFX, 2));

        rewardCoin += 10;
        totalCoin += 10;
        GameUIManager.Instance.UpdateTextCoin(totalCoin);
    }

    IEnumerator CoDisableObject(GameObject go, float delay)
    {
        yield return new WaitForSeconds(delay);
        go.SetActive(false);
    }
    #endregion

    #region skin
    public bool isFullRewardSkin()
    {
        bool isFull = true;
        //for (int i = 0; i < 11; i++)
        //{
        //    if (i != 1)
        //    {
        //        if (Database.instance.GetSkinUnlockStatusByLevel(i, 1) == 0)
        //            isFull = false;
        //    }
        //}
        return isFull;
    }
    #endregion
}
