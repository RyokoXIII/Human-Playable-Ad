using System.Collections;
using UnityEngine;

public class BossController : CharacterController
{
    // Start is called before the first frame update
    void Start()
    {
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

        OnLoadSkinBoss();
    }

    // Update is called once per frame
    void Update()
    {

    }
    private void OnEnable()
    {
        this.RegisterListener((int)EventID.OnFightDefeat, OnBossDefeat);
        this.RegisterListener((int)EventID.OnLoadSkin, OnLoadSkinBoss);
        this.RegisterListener((int)EventID.OnAttackBoss, OnBossAttack);

    }

    private void OnDisable()
    {
        if (EventDispatcher.Instance != null)
        {
            EventDispatcher.Instance.RemoveListener((int)EventID.OnFightDefeat, OnBossDefeat);
            EventDispatcher.Instance.RemoveListener((int)EventID.OnLoadSkin, OnLoadSkinBoss);
            EventDispatcher.Instance.RemoveListener((int)EventID.OnAttackBoss, OnBossAttack);

        }
    }
    public void OnBossDefeat(object obj)
    {
        isDefeat = true;
        anim.enabled = false;
        foreach (Rigidbody rig in allRig)
        {
            rig.isKinematic = false;
            if (rig.gameObject.GetComponent<BoxCollider>() != null)
                rig.gameObject.GetComponent<BoxCollider>().isTrigger = false;
            if (rig.gameObject.GetComponent<CapsuleCollider>() != null)
                rig.gameObject.GetComponent<CapsuleCollider>().isTrigger = false;
            rig.AddForce(new Vector3(0, 15, 10), ForceMode.Impulse);
        }
    }

    public void OnLoadSkinBoss(object obj)
    {

    }
    public void OnBossAttack(object obj)
    {
        //Debug.Log(transform.parent.GetComponent<FighterController>().fighterID);
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
                anim.Play("boss_rifle");
                break;
        }
        if (transform.parent.GetComponent<FighterController>().fighterID >= 4)
        {
            isShooter = true;
            ShootBulletBoss(transform.parent.GetComponent<FighterController>().fighterID);
        }
    }
    public void OnLoadSkinBoss()
    {
        for (int i = 0; i < arSkin.Length; i++)
        {
            arSkin[i].SetActive(false);
        }
        arSkin[transform.parent.GetComponent<FighterController>().fighterID].SetActive(true);

        for (int i = 0; i < listWeaponRight.Count; i++)
        {
            listWeaponRight[i].gameObject.SetActive(false);
        }
        listWeaponRight[transform.parent.GetComponent<FighterController>().fighterID].gameObject.SetActive(true);

        for (int i = 0; i < listWeaponLeft.Count; i++)
        {
            listWeaponLeft[i].gameObject.SetActive(false);
        }
        listWeaponLeft[transform.parent.GetComponent<FighterController>().fighterID].gameObject.SetActive(true);
    }

    #region shooting
    public void ShootBulletBoss(int id)
    {
        float timePerShoot = 0.3f;
        if (isShooter)
        {
            distanceHitbox = 5f;
            switch (id)
            {
                case 4:
                    timePerShoot = 0.35f;
                    //anim.Play("run_bow");
                    break;
                case 5:
                    timePerShoot = 0.35f;
                    //anim.Play("run_crossbow");
                    break;
                case 6:
                    timePerShoot = 0.3f;
                    //anim.Play("run_musket");
                    break;
                case 7:
                    timePerShoot = 0.3f;
                    //anim.Play("run_dual_piston");
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                    timePerShoot = 0.2f;
                    //anim.Play("run_rifle");
                    break;
            }
            StopAllCoroutines();
            StartCoroutine(CoShootBulletBoss(timePerShoot, id));
        }
    }

    //public GameObject arrow, bullet1, bullet2, bullet3, laser1, laser2;

    IEnumerator CoShootBulletBoss(float timePerShoot, int id)
    {
        GameObject prefabBullet = null;
        if (id == 4 || id == 5)
        {
            prefabBullet = arrow;
        }
        if (id == 6)
        {
            prefabBullet = bullet1;
        }
        if (id == 7)
        {
            prefabBullet = bullet2;
        }
        if (id == 8)
        {
            prefabBullet = bullet3;
        }
        if (id == 9)
        {
            prefabBullet = laser1;
        }
        if (id == 10)
        {
            prefabBullet = laser2;
        }
        //Debug.Log("Shot");
        GameObject goBullet = SCR_Pool.GetFreeObject(prefabBullet);
        goBullet.SetActive(true);
        goBullet.transform.position = tfBullet.position;

        if (id == 7)
        {
            goBullet.transform.position = tfBullet.position - new Vector3(0.2f, 0, 0);

            GameObject goBullet2 = SCR_Pool.GetFreeObject(prefabBullet);
            goBullet2.SetActive(true);
            goBullet2.transform.position = tfBullet.position + new Vector3(0.1f, 0, 0);
            goBullet2.GetComponent<BulletController>().speed = -10;

            StartCoroutine(CoDisableObject(goBullet2, 2));
        }
        goBullet.GetComponent<BulletController>().speed = -10;
        StartCoroutine(CoDisableObject(goBullet, 2));
        fx_shoot.Play();
        yield return new WaitForSeconds(timePerShoot);
        if (isShooter && !PlayerController.Instance.isCelebrate && !isDefeat)
        {
            StartCoroutine(CoShootBulletBoss(timePerShoot, id));
        }
    }
    IEnumerator CoDisableObject(GameObject go, float delay)
    {
        yield return new WaitForSeconds(delay);
        go.SetActive(false);
    }
    #endregion
}
