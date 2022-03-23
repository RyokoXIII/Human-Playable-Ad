using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CharacterController : MonoBehaviour
{
    [HideInInspector]
    public Animator anim;
    [HideInInspector]
    public float distanceHitbox;
    public GameObject[] arSkin;

    [Header("-----Shooter-----")]
    public bool isShooter;
    //public GameObject prefabBullet;
    public Transform tfBullet;
    //public float timePerShoot;
    public ParticleSystem fx_shoot;
    [Header("-----Weapons-----")]
    public Transform weaponsRight;
    public Transform weaponsLeft;
    public List<Transform> listWeaponRight, listWeaponLeft;
    public Mesh[] arMeshWeaponSkin;
    public Rigidbody[] allRig;
    public bool isDefeat = false;
    public ParticleSystem fx_slash, fx_hitted, fx_spear_hit;
    public bool isBoss;
    Collider colEnemy;

    bool isAttacking = false;

    void Awake()
    {
        SCR_Pool.Flush();
        anim = GetComponent<Animator>();
        listWeaponRight = weaponsRight.GetChilds();
        listWeaponLeft = weaponsLeft.GetChilds();

        allRig = GetComponentsInChildren<Rigidbody>();
        foreach (Rigidbody rig in allRig)
        {
            rig.isKinematic = true;
            if (rig.gameObject.GetComponent<BoxCollider>() != null)
                rig.gameObject.GetComponent<BoxCollider>().isTrigger = true;
            if (rig.gameObject.GetComponent<CapsuleCollider>() != null)
                rig.gameObject.GetComponent<CapsuleCollider>().isTrigger = true;
        }

    }
    private void OnEnable()
    {
        //GameStateManager.OnStateChanged += GameStateManager_OnStateChanged;
        this.RegisterListener((int)EventID.OnCharRun, OnRun);
        this.RegisterListener((int)EventID.OnCharAttackMelee, OnAttackMelee);
        this.RegisterListener((int)EventID.OnLoadSkin, OnLoadSkin);
        this.RegisterListener((int)EventID.OnIncreaseAnim, OnIncreaseAnim);
        this.RegisterListener((int)EventID.OnVictory, OnVictory);
        this.RegisterListener((int)EventID.OnAttackBoss, OnAttackBoss);
        //this.RegisterListener((int)EventID.OnFightDefeat, OnDefeat);
        this.RegisterListener((int)EventID.OnChangeDistanceHitbox, OnChangeDistanceHitbox);
        this.RegisterListener((int)EventID.OnStopAllCoroutines, OnStopAllCoroutines);
        //this.RegisterListener((int)EventID.OnShowFxHitted, OnShowFxHitted);
        this.RegisterListener((int)EventID.OnDefeat, OnDefeat);
        //this.RegisterListener((int)EventID.OnShowFxHitted, OnShowFxHitted);
        this.RegisterListener((int)EventID.OnTurnOffAllSkin, OnTurnOffAllWeapon);


        if (PlayerController.Instance != null && PlayerController.Instance.currentCharID >= 4)
        {
            isShooter = true;
            ShootBullet();
        }
    }
    private void OnDisable()
    {
        if (EventDispatcher.Instance != null)
        {
            EventDispatcher.Instance.RemoveListener((int)EventID.OnCharRun, OnRun);
            EventDispatcher.Instance.RemoveListener((int)EventID.OnCharAttackMelee, OnAttackMelee);
            EventDispatcher.Instance.RemoveListener((int)EventID.OnLoadSkin, OnLoadSkin);
            EventDispatcher.Instance.RemoveListener((int)EventID.OnIncreaseAnim, OnIncreaseAnim);
            EventDispatcher.Instance.RemoveListener((int)EventID.OnVictory, OnVictory);
            EventDispatcher.Instance.RemoveListener((int)EventID.OnAttackBoss, OnAttackBoss);
            //EventDispatcher.Instance.RemoveListener((int)EventID.OnFightDefeat, OnDefeat);
            EventDispatcher.Instance.RemoveListener((int)EventID.OnChangeDistanceHitbox, OnChangeDistanceHitbox);
            EventDispatcher.Instance.RemoveListener((int)EventID.OnStopAllCoroutines, OnStopAllCoroutines);
            //EventDispatcher.Instance.RemoveListener((int)EventID.OnShowFxHitted, OnShowFxHitted);
            EventDispatcher.Instance.RemoveListener((int)EventID.OnDefeat, OnDefeat);
            //EventDispatcher.Instance.RemoveListener((int)EventID.OnShowFxHitted, OnShowFxHitted);
            EventDispatcher.Instance.RemoveListener((int)EventID.OnTurnOffAllSkin, OnTurnOffAllWeapon);

        }
    }

    void Update()
    {
        //Debug.Log("isShooter " + isShooter);
        if (!isBoss)
        {
            if (isShooter)
            {
                RaycastHit hit;
                Debug.DrawRay(transform.position + Vector3.up, transform.forward * distanceHitbox, Color.red);
                if (Physics.Raycast(transform.position + Vector3.up, transform.forward, out hit, distanceHitbox))
                {
                    if (hit.collider.CompareTag("Enemy") && !hit.collider.GetComponent<EnemyController>().isKnockout)
                    {
                        hit.collider.GetComponent<EnemyController>().Knockout(true);
                    }
                }
            }
            else
            {
                RaycastHit hit;
                Debug.DrawRay(transform.position + Vector3.up, transform.forward * 2.2f, Color.red);
                if (Physics.Raycast(transform.position + Vector3.up, transform.forward, out hit, 2.2f))
                {
                    //if (hit.collider.CompareTag("Enemy") && !hit.collider.GetComponent<EnemyController>().isKnockout)
                        if (hit.collider.CompareTag("Enemy") && !hit.collider.GetComponent<EnemyController>().isKnockout)
                    {
                        if (PlayerController.Instance.currentCharID == 3)
                            anim.Play("run_spear");
                        else
                        {
                            anim.Play("hit_run");
                            //this.PostEvent((int)EventID.OnCharAttackMelee);
                        }
                        hit.collider.GetComponent<EnemyController>().Knockout(true);
                        colEnemy = hit.collider;
                    }
                }
            }
        }

    }

    //public void OnShowFxHitted(object obj)
    //{
    //    if (!fx_hitted.gameObject.activeSelf)
    //        fx_hitted.gameObject.SetActive(true);
    //}
    public void OnChangeDistanceHitbox(object obj)
    {
        if (!isBoss)
            distanceHitbox = 2.2f;
    }
    public void OnIncreaseAnim(object obj)
    {
        //if (!isShooter)
        //    anim.speed = 2;
    }
    public void OnRun(object obj)
    {
        //if (!isBoss)
        //Debug.Log(PlayerController.Instance.currentCharID);
        if (PlayerController.Instance.currentCharID == 3)
            anim.Play("run_spear_no_attack");
        else
            anim.SetTrigger("run");
    }
    public void OnAttackMelee(object obj)
    {
        if (!isBoss)
            anim.SetTrigger("attack_melee");
            //anim.Play("hit_run");
    }
    public void OnAttackBoss(object obj)
    {
        //anim.SetTrigger("attack_boss");
        //anim.Play("hit");
        if (isBoss)
        {
            Debug.Log(transform.parent.GetComponent<FighterController>().fighterID);
            switch (transform.parent.GetComponent<FighterController>().fighterID + 1)
            {
                case 1:
                case 2:
                case 3:
                    anim.Play("boss_melee");
                    break;
                case 4:
                    anim.Play("boss_spear");
                    break;
                case 5:
                    anim.Play("boss_bow");
                    break;
                case 8:
                    anim.Play("boss_piston");
                    break;
                case 6:
                case 7:
                case 9:
                case 10:
                case 11:
                    anim.Play("boss_riffle");
                    break;
            }
        }
        else
        {
            int currentCharID = PlayerController.Instance.currentCharID + 1;
            switch (currentCharID)
            {
                case 1:
                case 2:
                case 3:
                    anim.Play("boss_melee");
                    break;
                case 4:
                    anim.Play("boss_spear");
                    break;
                case 5:
                    anim.Play("boss_bow");
                    break;
                case 8:
                    anim.Play("boss_piston");
                    break;
                case 6:
                case 7:
                case 9:
                case 10:
                case 11:
                    anim.Play("boss_rifle");
                    break;
            }
        }
    }
    public void OnVictory(object obj)
    {
        anim.SetTrigger("victory");
        SCR_Pool.DeactivateAllObject();
    }

    public void OnShowFxHitted()
    {
        if (!fx_hitted.gameObject.activeSelf)
            fx_hitted.gameObject.SetActive(true);
    }
    public void OnShowSpearFX()
    {
        fx_spear_hit.Play();
    }
    public void OnStopAllCoroutines(object obj)
    {
        StopAllCoroutines();
    }
    public void OnFightingBoss()
    {
        //transform.parent.GetComponent<FighterController>().AttackByTime();
        fx_slash.Play();
    }
    public void OnCheckLastHit()
    {
        Debug.Log("CheckLastHit");
        transform.parent.GetComponent<FighterController>().CheckLastHit();
    }
    public void OnDefeat(object obj)
    {
        anim.Play("defeat");
    }


    public void OnLoadSkin(object obj)
    {
        for (int i = 0; i < arSkin.Length; i++)
        {
            arSkin[i].SetActive(false);
        }
        //Debug.Log(PlayerController.Instance.currentCharID);
        arSkin[PlayerController.Instance.currentCharID].SetActive(true);

        for (int i = 0; i < listWeaponRight.Count; i++)
        {
            listWeaponRight[i].gameObject.SetActive(false);
        }
        listWeaponRight[PlayerController.Instance.currentCharID].gameObject.SetActive(true);

        for (int i = 0; i < listWeaponLeft.Count; i++)
        {
            listWeaponLeft[i].gameObject.SetActive(false);
        }
        listWeaponLeft[PlayerController.Instance.currentCharID].gameObject.SetActive(true);

        if (PlayerController.Instance.currentCharID >= 4)
        {
            isShooter = true;
            ShootBullet();
        }
        else
        {
            isShooter = false;
            if (PlayerController.Instance.isStart)
                anim.Play("run");
        }
    }
    public int level = 0;
    public int skinID = 0;
    public void OnLoadSkin2(object obj)
    {
        //RemoveClothes(skinID);

        //level = PlayerController.Instance.currentCharID;
        ////skinID = Database.instance.database.arLevelSkinCurrentID[level];
        //skinID = Database.instance.GetCurrentSkinIDAtLevel(level);

        //AddClothes("naked_legs", "Legs", "skin_" + level + skinID, 0);

        //for (int i = 0; i < listWeaponRight.Count; i++)
        //{
        //    listWeaponRight[i].gameObject.SetActive(false);
        //}
        //listWeaponRight[level].gameObject.SetActive(true);

        //for (int i = 0; i < listWeaponLeft.Count; i++)
        //{
        //    listWeaponLeft[i].gameObject.SetActive(false);
        //}
        //if (level == 2)
        //{
        //    if (Database.instance.GetCurrentSkinIDAtLevel(level) == 0)
        //        listWeaponLeft[level].gameObject.SetActive(true);
        //    else
        //        listWeaponLeft[listWeaponLeft.Count - 2].gameObject.SetActive(true);
        //}
        //else if (level == 3)
        //{
        //    if (Database.instance.GetCurrentSkinIDAtLevel(level) == 0)
        //        listWeaponLeft[level].gameObject.SetActive(true);
        //    else
        //        listWeaponLeft[listWeaponLeft.Count - 1].gameObject.SetActive(true);
        //}
        //else
        //    listWeaponLeft[level].gameObject.SetActive(true);

        //if (level >= 4)
        //{
        //    isShooter = true;
        //    ShootBullet();
        //}
        //else
        //{
        //    isShooter = false;
        //    if (PlayerController.Instance.isStart)
        //        anim.Play("run");
        //}
    }
    public void AddClothes()
    {
        

    }
    public void RemoveClothes()
    {
        
    }

    public void OnTurnOffAllWeapon(object obj)
    {
        for (int i = 0; i < listWeaponRight.Count; i++)
        {
            listWeaponRight[i].gameObject.SetActive(false);
        }

        for (int i = 0; i < listWeaponLeft.Count; i++)
        {
            listWeaponLeft[i].gameObject.SetActive(false);
        }
    }

    public void OnLoadWeapon()
    {

    }

    #region melee attack
    public void OnEnemyKnockout()
    {
        if (!colEnemy.GetComponent<EnemyController>().isKnockout)
        {
            SoundController.Instance.PlaySoundByClip(SoundController.Instance.sound_melee);
            if (PlayerController.Instance.currentCharID == 3)
                colEnemy.GetComponent<EnemyController>().Knockout(true);
            else
                colEnemy.GetComponent<EnemyController>().Knockout(false);

            //isAttacking = false;
        }
    }
    #endregion

    #region shooting
    public void ShootBullet()
    {
        float timePerShoot = 0.3f;
        if (isShooter)
        {
            distanceHitbox = 5f;
            switch (PlayerController.Instance.currentCharID)
            {
                case 4:
                    timePerShoot = 0.35f;
                    anim.Play("run_bow");
                    break;
                case 5:
                    timePerShoot = 0.35f;
                    anim.Play("run_crossbow");
                    break;
                case 6:
                    timePerShoot = 0.3f;
                    anim.Play("run_musket");
                    break;
                case 7:
                    timePerShoot = 0.3f;
                    anim.Play("run_dual_piston");
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                    timePerShoot = 0.2f;
                    anim.Play("run_rifle");
                    break;
            }
            StopAllCoroutines();
            StartCoroutine(CoShootBullet(timePerShoot));
        }
    }

    public GameObject arrow, bullet1, bullet2, bullet3, laser1, laser2;

    IEnumerator CoShootBullet(float timePerShoot)
    {
        GameObject prefabBullet = null;

        if (PlayerController.Instance.currentCharID == 4 || PlayerController.Instance.currentCharID == 5)
        {
            prefabBullet = arrow;
        }
        if (PlayerController.Instance.currentCharID == 6)
        {
            prefabBullet = bullet1;
        }
        if (PlayerController.Instance.currentCharID == 7)
        {
            prefabBullet = bullet2;
        }
        if (PlayerController.Instance.currentCharID == 8)
        {
            prefabBullet = bullet3;
        }
        if (PlayerController.Instance.currentCharID == 9)
        {
            prefabBullet = laser1;
        }
        if (PlayerController.Instance.currentCharID == 10)
        {
            prefabBullet = laser2;
        }
        //Debug.Log("Shot");
        GameObject goBullet = SCR_Pool.GetFreeObject(prefabBullet);
        goBullet.SetActive(true);
        goBullet.transform.position = tfBullet.position;

        if (PlayerController.Instance.currentCharID == 7)
        {
            goBullet.transform.position = tfBullet.position - new Vector3(0.2f, 0, 0);

            GameObject goBullet2 = SCR_Pool.GetFreeObject(prefabBullet);
            goBullet2.SetActive(true);
            goBullet2.transform.position = tfBullet.position + new Vector3(0.1f, 0, 0);
            StartCoroutine(CoDisableObject(goBullet2, 2));
        }

        StartCoroutine(CoDisableObject(goBullet, 2));
        fx_shoot.Play();
        yield return new WaitForSeconds(timePerShoot);
        if (isShooter && !PlayerController.Instance.isCelebrate)
        {
            StartCoroutine(CoShootBullet(timePerShoot));
        }
    }
    IEnumerator CoDisableObject(GameObject go, float delay)
    {
        yield return new WaitForSeconds(delay);
        go.SetActive(false);
    }
    #endregion
}
