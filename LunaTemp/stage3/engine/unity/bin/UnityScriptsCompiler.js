if ( TRACE ) { TRACE( JSON.parse( '["CharacterController#init","CharacterController#Awake","CharacterController#OnEnable","CharacterController#OnDisable","CharacterController#Update","CharacterController#OnChangeDistanceHitbox","CharacterController#OnIncreaseAnim","CharacterController#OnRun","CharacterController#OnAttackMelee","CharacterController#OnAttackBoss","CharacterController#OnVictory","CharacterController#OnShowFxHitted","CharacterController#OnShowSpearFX","CharacterController#OnStopAllCoroutines","CharacterController#OnFightingBoss","CharacterController#OnCheckLastHit","CharacterController#OnDefeat","CharacterController#OnLoadSkin","CharacterController#OnLoadSkin2","CharacterController#AddClothes","CharacterController#RemoveClothes","CharacterController#OnTurnOffAllWeapon","CharacterController#OnLoadWeapon","CharacterController#OnEnemyKnockout","CharacterController#ShootBullet","CharacterController#CoShootBullet","CharacterController#CoDisableObject","BulletController#init","BulletController#Start","BulletController#Update","BulletController#CoDisappear","CameraFollow#init","CameraFollow#Start","CameraFollow#LateUpdate","CameraFollow#Update","CanvasScalerMatch#OnEnable","ClampScore#Start","ClampScore#FixedUpdate","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","EnemyController#init","EnemyController#Start","EnemyController#Update","EnemyController#OnEnable","EnemyController#OnDisable","EnemyController#OnLoadSkin","EnemyController#Knockout","EnemyController#BotDied","EpicToonFX.ETFXButtonScript#Start","EpicToonFX.ETFXButtonScript#Update","EpicToonFX.ETFXButtonScript#getProjectileNames","EpicToonFX.ETFXButtonScript#overButton","EpicToonFX.ETFXFireProjectile#init","EpicToonFX.ETFXFireProjectile#Start","EpicToonFX.ETFXFireProjectile#Update","EpicToonFX.ETFXFireProjectile#nextEffect","EpicToonFX.ETFXFireProjectile#previousEffect","EpicToonFX.ETFXFireProjectile#AdjustSpeed","EpicToonFX.ETFXLightFade#init","EpicToonFX.ETFXLightFade#Start","EpicToonFX.ETFXLightFade#Update","EpicToonFX.ETFXLoopScript#init","EpicToonFX.ETFXLoopScript#Start","EpicToonFX.ETFXLoopScript#PlayEffect","EpicToonFX.ETFXLoopScript#EffectLoop","EpicToonFX.ETFXMouseOrbit#ClampAngle","EpicToonFX.ETFXMouseOrbit#init","EpicToonFX.ETFXMouseOrbit#Start","EpicToonFX.ETFXMouseOrbit#LateUpdate","EpicToonFX.ETFXPitchRandomizer#init","EpicToonFX.ETFXPitchRandomizer#Start","EpicToonFX.ETFXRotation#init","EpicToonFX.ETFXRotation#Start","EpicToonFX.ETFXRotation#Update","ETFXProjectileScript#init","ETFXProjectileScript#Start","ETFXProjectileScript#OnCollisionEnter","ETFXSceneManager#init","ETFXSceneManager#LoadScene1","ETFXSceneManager#LoadScene2","ETFXSceneManager#LoadScene3","ETFXSceneManager#LoadScene4","ETFXSceneManager#LoadScene5","ETFXSceneManager#LoadScene6","ETFXSceneManager#LoadScene7","ETFXSceneManager#LoadScene8","ETFXSceneManager#LoadScene9","ETFXSceneManager#LoadScene10","ETFXSceneManager#LoadScene11","ETFXSceneManager#LoadScene12","ETFXSceneManager#LoadScene13","ETFXSceneManager#Update","LazySingleton$1#Instance#get","LazySingleton$1#init","LazySingleton$1#ctor","LazySingleton$1#Awake","LazySingleton$1#OnDestroy","EventDispatcherExtension#RegisterListener","EventDispatcherExtension#PostEvent$1","EventDispatcherExtension#PostEvent","FighterController#Start","FighterController#Update","FighterController#OnEnable","FighterController#OnDisable","FighterController#OnBeginFighting","FighterController#OnBeHit","FighterController#OnDefeat","FighterController#CoWaitCameraWin","FighterController#CoWaitCameraLose","FighterController#AttackByTime","FighterController#CoAttackByTime","FighterController#CheckLastHit","FighterController#CoTimeScale","GameManager#Start","GameManager#Update","GameManager#ShowCoinFX","GameManager#CoDisableObject","GameManager#isFullRewardSkin","GameUIManager#init","GameUIManager#Awake","GameUIManager#Start","GameUIManager#Update","GameUIManager#UpdateTextCoin","GameUIManager#OnCickStartGame","GameUIManager#ShowPopupEnding","GameUIManager#CoShowPopupEnding","GameUIManager#ShowPopupDefeat","GameUIManager#CoShowPopupDefeat","GameUIManager#ShowText","GameUIManager#ButtonDownload","GameUIManager#ButtonDirectToStore","GameUIManager#OnClickGetSkin","ItemController#init","ItemController#Start","ItemController#Update","ItemController#SetItemValue","ItemController#ConvertTime","ItemController#GetTypeCalculateSign","MapManager#Start","MapManager#LoadCurrentMap","MultiController#Start","MultiController#Update","MultiController#LoadMulti","PanelFighting#init","PanelFighting#Start","PanelFighting#Update","ParticleEffectsLibrary#init","ParticleEffectsLibrary#Awake","ParticleEffectsLibrary#Start","ParticleEffectsLibrary#GetCurrentPENameString","ParticleEffectsLibrary#PreviousParticleEffect","ParticleEffectsLibrary#NextParticleEffect","ParticleEffectsLibrary#SpawnParticleEffect","PEButtonScript#init","PEButtonScript#Start","PEButtonScript#OnPointerEnter","PEButtonScript#OnPointerExit","PEButtonScript#OnButtonClicked","PEDestoryTimed#Start","PEDestoryTimed#Update","PlayerController#init","PlayerController#Start","PlayerController#TapToAttackMenu","PlayerController#ClickToAttack","PlayerController#Update","PlayerController#UpdateStartScore","PlayerController#InitCharacter","PlayerController#OnTriggerEnter","PlayerController#CoWaitGetItem","PlayerController#GetItem","PlayerController#UpdateTextScore","PlayerController#LoadSkinByScore","PlayerController#GetX3Item","PlayerController#MultiID","PlayerController#GetTimeMoveMulti","PlayerController#ShowEnding","PlayerController#ChangeSpeed","PlayerController#ShowCelebration","PlayerController#FightingBoss","PlayerController#CoStartFight","PlayerController#IsMouseOverUI","PlayerController#IsPointerOverUIObject","PoolEntry#init","PoolEntry#ctor","PopupEnding#init","PopupEnding#Start","PopupEnding#Update","PopupEnding#OnClickNextLevel","PopupEnding#Open","PopupEnding#Close","PopupEnding#ShowSkinReward","PopupEnding#ButtonDirectToStore","SCR_Pool#init","SCR_Pool#GetFreeObjectFromEntry","SCR_Pool#GetFreeObject","SCR_Pool#GetObjectList","SCR_Pool#DeactivateAllObject","SCR_Pool#Flush","SoundController#init","SoundController#Start","SoundController#PlayMusicBgr","SoundController#DelayLoadVolumeMusic","SoundController#PlaySoundByClip","TransformExtend#GetChilds","UICanvasManager#init","UICanvasManager#Awake","UICanvasManager#Start","UICanvasManager#Update","UICanvasManager#UpdateToolTip","UICanvasManager#ClearToolTip","UICanvasManager#SelectPreviousPE","UICanvasManager#SelectNextPE","UICanvasManager#SpawnCurrentParticleEffect","UICanvasManager#UIButtonClick","BossController#Start","BossController#Update$1","BossController#OnEnable$1","BossController#OnDisable$1","BossController#OnBossDefeat","BossController#OnLoadSkinBoss$1","BossController#OnLoadSkinBoss","BossController#OnBossAttack","BossController#ShootBulletBoss","BossController#CoShootBulletBoss","BossController#CoDisableObject$1","EventDispatcher#inherits","EventDispatcher#init","EventDispatcher#RegisterListener","EventDispatcher#RegisterListener$1","EventDispatcher#PostEvent","EventDispatcher#PostEvent$1","EventDispatcher#RemoveListener","EventDispatcher#RemoveListener$1","EventDispatcher#ClearAllListener"]' ) ); }
/**
 * @version 1.0.8116.34070
 * @copyright anton
 * @compiler Bridge.NET 17.9.13-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*CharacterController start.*/
    Bridge.define("CharacterController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            anim: null,
            distanceHitbox: 0,
            arSkin: null,
            isShooter: false,
            tfBullet: null,
            fx_shoot: null,
            weaponsRight: null,
            weaponsLeft: null,
            listWeaponRight: null,
            listWeaponLeft: null,
            arMeshWeaponSkin: null,
            allRig: null,
            isDefeat: false,
            fx_slash: null,
            fx_hitted: null,
            fx_spear_hit: null,
            isBoss: false,
            colEnemy: null,
            isAttacking: false,
            level: 0,
            skinID: 0,
            arrow: null,
            bullet1: null,
            bullet2: null,
            bullet3: null,
            laser1: null,
            laser2: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CharacterController#init", this ); }

                this.isDefeat = false;
                this.isAttacking = false;
                this.level = 0;
                this.skinID = 0;
            }
        },
        methods: {
            /*CharacterController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CharacterController#Awake", this ); }

                var $t;
                SCR_Pool.Flush();
                this.anim = this.GetComponent(UnityEngine.Animator);
                this.listWeaponRight = TransformExtend.GetChilds(this.weaponsRight);
                this.listWeaponLeft = TransformExtend.GetChilds(this.weaponsLeft);

                this.allRig = this.GetComponentsInChildren(UnityEngine.Rigidbody);
                $t = Bridge.getEnumerator(this.allRig);
                try {
                    while ($t.moveNext()) {
                        var rig = $t.Current;
                        rig.isKinematic = true;
                        if (UnityEngine.Component.op_Inequality(rig.gameObject.GetComponent(UnityEngine.BoxCollider), null)) {
                            rig.gameObject.GetComponent(UnityEngine.BoxCollider).isTrigger = true;
                        }
                        if (UnityEngine.Component.op_Inequality(rig.gameObject.GetComponent(UnityEngine.CapsuleCollider), null)) {
                            rig.gameObject.GetComponent(UnityEngine.CapsuleCollider).isTrigger = true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

            },
            /*CharacterController.Awake end.*/

            /*CharacterController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "CharacterController#OnEnable", this ); }

                //GameStateManager.OnStateChanged += GameStateManager_OnStateChanged;
                EventDispatcherExtension.RegisterListener(this, EventID.OnCharRun, Bridge.fn.cacheBind(this, this.OnRun));
                EventDispatcherExtension.RegisterListener(this, EventID.OnCharAttackMelee, Bridge.fn.cacheBind(this, this.OnAttackMelee));
                EventDispatcherExtension.RegisterListener(this, EventID.OnLoadSkin, Bridge.fn.cacheBind(this, this.OnLoadSkin));
                EventDispatcherExtension.RegisterListener(this, EventID.OnIncreaseAnim, Bridge.fn.cacheBind(this, this.OnIncreaseAnim));
                EventDispatcherExtension.RegisterListener(this, EventID.OnVictory, Bridge.fn.cacheBind(this, this.OnVictory));
                EventDispatcherExtension.RegisterListener(this, EventID.OnAttackBoss, Bridge.fn.cacheBind(this, this.OnAttackBoss));
                //this.RegisterListener((int)EventID.OnFightDefeat, OnDefeat);
                EventDispatcherExtension.RegisterListener(this, EventID.OnChangeDistanceHitbox, Bridge.fn.cacheBind(this, this.OnChangeDistanceHitbox));
                EventDispatcherExtension.RegisterListener(this, EventID.OnStopAllCoroutines, Bridge.fn.cacheBind(this, this.OnStopAllCoroutines));
                //this.RegisterListener((int)EventID.OnShowFxHitted, OnShowFxHitted);
                EventDispatcherExtension.RegisterListener(this, EventID.OnDefeat, Bridge.fn.cacheBind(this, this.OnDefeat));
                //this.RegisterListener((int)EventID.OnShowFxHitted, OnShowFxHitted);
                EventDispatcherExtension.RegisterListener(this, EventID.OnTurnOffAllSkin, Bridge.fn.cacheBind(this, this.OnTurnOffAllWeapon));


                if (UnityEngine.MonoBehaviour.op_Inequality(PlayerController.Instance, null) && PlayerController.Instance.currentCharID >= 4) {
                    this.isShooter = true;
                    this.ShootBullet();
                }
            },
            /*CharacterController.OnEnable end.*/

            /*CharacterController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "CharacterController#OnDisable", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(LazySingleton$1(EventDispatcher).Instance, null)) {
                    LazySingleton$1(EventDispatcher).Instance.RemoveListener(EventID.OnCharRun, Bridge.fn.cacheBind(this, this.OnRun));
                    LazySingleton$1(EventDispatcher).Instance.RemoveListener(EventID.OnCharAttackMelee, Bridge.fn.cacheBind(this, this.OnAttackMelee));
                    LazySingleton$1(EventDispatcher).Instance.RemoveListener(EventID.OnLoadSkin, Bridge.fn.cacheBind(this, this.OnLoadSkin));
                    LazySingleton$1(EventDispatcher).Instance.RemoveListener(EventID.OnIncreaseAnim, Bridge.fn.cacheBind(this, this.OnIncreaseAnim));
                    LazySingleton$1(EventDispatcher).Instance.RemoveListener(EventID.OnVictory, Bridge.fn.cacheBind(this, this.OnVictory));
                    LazySingleton$1(EventDispatcher).Instance.RemoveListener(EventID.OnAttackBoss, Bridge.fn.cacheBind(this, this.OnAttackBoss));
                    //EventDispatcher.Instance.RemoveListener((int)EventID.OnFightDefeat, OnDefeat);
                    LazySingleton$1(EventDispatcher).Instance.RemoveListener(EventID.OnChangeDistanceHitbox, Bridge.fn.cacheBind(this, this.OnChangeDistanceHitbox));
                    LazySingleton$1(EventDispatcher).Instance.RemoveListener(EventID.OnStopAllCoroutines, Bridge.fn.cacheBind(this, this.OnStopAllCoroutines));
                    //EventDispatcher.Instance.RemoveListener((int)EventID.OnShowFxHitted, OnShowFxHitted);
                    LazySingleton$1(EventDispatcher).Instance.RemoveListener(EventID.OnDefeat, Bridge.fn.cacheBind(this, this.OnDefeat));
                    //EventDispatcher.Instance.RemoveListener((int)EventID.OnShowFxHitted, OnShowFxHitted);
                    LazySingleton$1(EventDispatcher).Instance.RemoveListener(EventID.OnTurnOffAllSkin, Bridge.fn.cacheBind(this, this.OnTurnOffAllWeapon));

                }
            },
            /*CharacterController.OnDisable end.*/

            /*CharacterController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CharacterController#Update", this ); }

                //Debug.Log("isShooter " + isShooter);
                if (!this.isBoss) {
                    if (this.isShooter) {
                        var hit = { v : new UnityEngine.RaycastHit() };
                        UnityEngine.Debug.DrawRay$1(this.transform.position.$clone().add( pc.Vec3.UP.clone() ), this.transform.forward.$clone().scale( this.distanceHitbox ), new pc.Color( 1, 0, 0, 1 ));
                        if (UnityEngine.Physics.Raycast$3(this.transform.position.$clone().add( pc.Vec3.UP.clone() ), this.transform.forward, hit, this.distanceHitbox)) {
                            if (hit.v.collider.CompareTag("Enemy") && !hit.v.collider.GetComponent(EnemyController).isKnockout) {
                                hit.v.collider.GetComponent(EnemyController).Knockout(true);
                            }
                        }
                    } else {
                        var hit1 = { v : new UnityEngine.RaycastHit() };
                        UnityEngine.Debug.DrawRay$1(this.transform.position.$clone().add( pc.Vec3.UP.clone() ), this.transform.forward.$clone().scale( 2.2 ), new pc.Color( 1, 0, 0, 1 ));
                        if (UnityEngine.Physics.Raycast$3(this.transform.position.$clone().add( pc.Vec3.UP.clone() ), this.transform.forward, hit1, 2.2)) {
                            //if (hit.collider.CompareTag("Enemy") && !hit.collider.GetComponent<EnemyController>().isKnockout)
                            if (hit1.v.collider.CompareTag("Enemy") && !hit1.v.collider.GetComponent(EnemyController).isKnockout) {
                                if (PlayerController.Instance.currentCharID === 3) {
                                    this.anim.Play$2("run_spear");
                                } else {
                                    this.anim.Play$2("hit_run");
                                    //this.PostEvent((int)EventID.OnCharAttackMelee);
                                }
                                hit1.v.collider.GetComponent(EnemyController).Knockout(true);
                                this.colEnemy = hit1.v.collider;
                            }
                        }
                    }
                }

            },
            /*CharacterController.Update end.*/

            /*CharacterController.OnChangeDistanceHitbox start.*/
            OnChangeDistanceHitbox: function (obj) {
if ( TRACE ) { TRACE( "CharacterController#OnChangeDistanceHitbox", this ); }

                if (!this.isBoss) {
                    this.distanceHitbox = 2.2;
                }
            },
            /*CharacterController.OnChangeDistanceHitbox end.*/

            /*CharacterController.OnIncreaseAnim start.*/
            OnIncreaseAnim: function (obj) {
if ( TRACE ) { TRACE( "CharacterController#OnIncreaseAnim", this ); }

                //if (!isShooter)
                //    anim.speed = 2;
            },
            /*CharacterController.OnIncreaseAnim end.*/

            /*CharacterController.OnRun start.*/
            OnRun: function (obj) {
if ( TRACE ) { TRACE( "CharacterController#OnRun", this ); }

                //if (!isBoss)
                //Debug.Log(PlayerController.Instance.currentCharID);
                if (PlayerController.Instance.currentCharID === 3) {
                    this.anim.Play$2("run_spear_no_attack");
                } else {
                    this.anim.SetTrigger$1("run");
                }
            },
            /*CharacterController.OnRun end.*/

            /*CharacterController.OnAttackMelee start.*/
            OnAttackMelee: function (obj) {
if ( TRACE ) { TRACE( "CharacterController#OnAttackMelee", this ); }

                if (!this.isBoss) {
                    this.anim.SetTrigger$1("attack_melee");
                }
                //anim.Play("hit_run");
            },
            /*CharacterController.OnAttackMelee end.*/

            /*CharacterController.OnAttackBoss start.*/
            OnAttackBoss: function (obj) {
if ( TRACE ) { TRACE( "CharacterController#OnAttackBoss", this ); }

                //anim.SetTrigger("attack_boss");
                //anim.Play("hit");
                if (this.isBoss) {
                    UnityEngine.Debug.Log(Bridge.box(this.transform.parent.GetComponent(FighterController).fighterID, System.Int32));
                    switch (((this.transform.parent.GetComponent(FighterController).fighterID + 1) | 0)) {
                        case 1: 
                        case 2: 
                        case 3: 
                            this.anim.Play$2("boss_melee");
                            break;
                        case 4: 
                            this.anim.Play$2("boss_spear");
                            break;
                        case 5: 
                            this.anim.Play$2("boss_bow");
                            break;
                        case 8: 
                            this.anim.Play$2("boss_piston");
                            break;
                        case 6: 
                        case 7: 
                        case 9: 
                        case 10: 
                        case 11: 
                            this.anim.Play$2("boss_riffle");
                            break;
                    }
                } else {
                    var currentCharID = (PlayerController.Instance.currentCharID + 1) | 0;
                    switch (currentCharID) {
                        case 1: 
                        case 2: 
                        case 3: 
                            this.anim.Play$2("boss_melee");
                            break;
                        case 4: 
                            this.anim.Play$2("boss_spear");
                            break;
                        case 5: 
                            this.anim.Play$2("boss_bow");
                            break;
                        case 8: 
                            this.anim.Play$2("boss_piston");
                            break;
                        case 6: 
                        case 7: 
                        case 9: 
                        case 10: 
                        case 11: 
                            this.anim.Play$2("boss_rifle");
                            break;
                    }
                }
            },
            /*CharacterController.OnAttackBoss end.*/

            /*CharacterController.OnVictory start.*/
            OnVictory: function (obj) {
if ( TRACE ) { TRACE( "CharacterController#OnVictory", this ); }

                this.anim.SetTrigger$1("victory");
                SCR_Pool.DeactivateAllObject();
            },
            /*CharacterController.OnVictory end.*/

            /*CharacterController.OnShowFxHitted start.*/
            OnShowFxHitted: function () {
if ( TRACE ) { TRACE( "CharacterController#OnShowFxHitted", this ); }

                if (!this.fx_hitted.gameObject.activeSelf) {
                    this.fx_hitted.gameObject.SetActive(true);
                }
            },
            /*CharacterController.OnShowFxHitted end.*/

            /*CharacterController.OnShowSpearFX start.*/
            OnShowSpearFX: function () {
if ( TRACE ) { TRACE( "CharacterController#OnShowSpearFX", this ); }

                this.fx_spear_hit.Play();
            },
            /*CharacterController.OnShowSpearFX end.*/

            /*CharacterController.OnStopAllCoroutines start.*/
            OnStopAllCoroutines: function (obj) {
if ( TRACE ) { TRACE( "CharacterController#OnStopAllCoroutines", this ); }

                this.StopAllCoroutines();
            },
            /*CharacterController.OnStopAllCoroutines end.*/

            /*CharacterController.OnFightingBoss start.*/
            OnFightingBoss: function () {
if ( TRACE ) { TRACE( "CharacterController#OnFightingBoss", this ); }

                //transform.parent.GetComponent<FighterController>().AttackByTime();
                this.fx_slash.Play();
            },
            /*CharacterController.OnFightingBoss end.*/

            /*CharacterController.OnCheckLastHit start.*/
            OnCheckLastHit: function () {
if ( TRACE ) { TRACE( "CharacterController#OnCheckLastHit", this ); }

                UnityEngine.Debug.Log$1("CheckLastHit");
                this.transform.parent.GetComponent(FighterController).CheckLastHit();
            },
            /*CharacterController.OnCheckLastHit end.*/

            /*CharacterController.OnDefeat start.*/
            OnDefeat: function (obj) {
if ( TRACE ) { TRACE( "CharacterController#OnDefeat", this ); }

                this.anim.Play$2("defeat");
            },
            /*CharacterController.OnDefeat end.*/

            /*CharacterController.OnLoadSkin start.*/
            OnLoadSkin: function (obj) {
if ( TRACE ) { TRACE( "CharacterController#OnLoadSkin", this ); }

                for (var i = 0; i < this.arSkin.length; i = (i + 1) | 0) {
                    this.arSkin[i].SetActive(false);
                }
                //Debug.Log(PlayerController.Instance.currentCharID);
                this.arSkin[PlayerController.Instance.currentCharID].SetActive(true);

                for (var i1 = 0; i1 < this.listWeaponRight.Count; i1 = (i1 + 1) | 0) {
                    this.listWeaponRight.getItem(i1).gameObject.SetActive(false);
                }
                this.listWeaponRight.getItem(PlayerController.Instance.currentCharID).gameObject.SetActive(true);

                for (var i2 = 0; i2 < this.listWeaponLeft.Count; i2 = (i2 + 1) | 0) {
                    this.listWeaponLeft.getItem(i2).gameObject.SetActive(false);
                }
                this.listWeaponLeft.getItem(PlayerController.Instance.currentCharID).gameObject.SetActive(true);

                if (PlayerController.Instance.currentCharID >= 4) {
                    this.isShooter = true;
                    this.ShootBullet();
                } else {
                    this.isShooter = false;
                    if (PlayerController.Instance.isStart) {
                        this.anim.Play$2("run");
                    }
                }
            },
            /*CharacterController.OnLoadSkin end.*/

            /*CharacterController.OnLoadSkin2 start.*/
            OnLoadSkin2: function (obj) {
if ( TRACE ) { TRACE( "CharacterController#OnLoadSkin2", this ); }

                //RemoveClothes(skinID);

                //level = PlayerController.Instance.currentCharID;
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
            },
            /*CharacterController.OnLoadSkin2 end.*/

            /*CharacterController.AddClothes start.*/
            AddClothes: function () {
if ( TRACE ) { TRACE( "CharacterController#AddClothes", this ); }



            },
            /*CharacterController.AddClothes end.*/

            /*CharacterController.RemoveClothes start.*/
            RemoveClothes: function () {
if ( TRACE ) { TRACE( "CharacterController#RemoveClothes", this ); }


            },
            /*CharacterController.RemoveClothes end.*/

            /*CharacterController.OnTurnOffAllWeapon start.*/
            OnTurnOffAllWeapon: function (obj) {
if ( TRACE ) { TRACE( "CharacterController#OnTurnOffAllWeapon", this ); }

                for (var i = 0; i < this.listWeaponRight.Count; i = (i + 1) | 0) {
                    this.listWeaponRight.getItem(i).gameObject.SetActive(false);
                }

                for (var i1 = 0; i1 < this.listWeaponLeft.Count; i1 = (i1 + 1) | 0) {
                    this.listWeaponLeft.getItem(i1).gameObject.SetActive(false);
                }
            },
            /*CharacterController.OnTurnOffAllWeapon end.*/

            /*CharacterController.OnLoadWeapon start.*/
            OnLoadWeapon: function () {
if ( TRACE ) { TRACE( "CharacterController#OnLoadWeapon", this ); }


            },
            /*CharacterController.OnLoadWeapon end.*/

            /*CharacterController.OnEnemyKnockout start.*/
            OnEnemyKnockout: function () {
if ( TRACE ) { TRACE( "CharacterController#OnEnemyKnockout", this ); }

                if (!this.colEnemy.GetComponent(EnemyController).isKnockout) {
                    SoundController.Instance.PlaySoundByClip(SoundController.Instance.sound_melee);
                    if (PlayerController.Instance.currentCharID === 3) {
                        this.colEnemy.GetComponent(EnemyController).Knockout(true);
                    } else {
                        this.colEnemy.GetComponent(EnemyController).Knockout(false);
                    }

                    //isAttacking = false;
                }
            },
            /*CharacterController.OnEnemyKnockout end.*/

            /*CharacterController.ShootBullet start.*/
            ShootBullet: function () {
if ( TRACE ) { TRACE( "CharacterController#ShootBullet", this ); }

                var timePerShoot = 0.3;
                if (this.isShooter) {
                    this.distanceHitbox = 5.0;
                    switch (PlayerController.Instance.currentCharID) {
                        case 4: 
                            timePerShoot = 0.35;
                            this.anim.Play$2("run_bow");
                            break;
                        case 5: 
                            timePerShoot = 0.35;
                            this.anim.Play$2("run_crossbow");
                            break;
                        case 6: 
                            timePerShoot = 0.3;
                            this.anim.Play$2("run_musket");
                            break;
                        case 7: 
                            timePerShoot = 0.3;
                            this.anim.Play$2("run_dual_piston");
                            break;
                        case 8: 
                        case 9: 
                        case 10: 
                        case 11: 
                            timePerShoot = 0.2;
                            this.anim.Play$2("run_rifle");
                            break;
                    }
                    this.StopAllCoroutines();
                    this.StartCoroutine$1(this.CoShootBullet(timePerShoot));
                }
            },
            /*CharacterController.ShootBullet end.*/

            /*CharacterController.CoShootBullet start.*/
            CoShootBullet: function (timePerShoot) {
if ( TRACE ) { TRACE( "CharacterController#CoShootBullet", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    prefabBullet,
                    goBullet,
                    goBullet2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    prefabBullet = null;

                                        if (PlayerController.Instance.currentCharID === 4 || PlayerController.Instance.currentCharID === 5) {
                                            prefabBullet = this.arrow;
                                        }
                                        if (PlayerController.Instance.currentCharID === 6) {
                                            prefabBullet = this.bullet1;
                                        }
                                        if (PlayerController.Instance.currentCharID === 7) {
                                            prefabBullet = this.bullet2;
                                        }
                                        if (PlayerController.Instance.currentCharID === 8) {
                                            prefabBullet = this.bullet3;
                                        }
                                        if (PlayerController.Instance.currentCharID === 9) {
                                            prefabBullet = this.laser1;
                                        }
                                        if (PlayerController.Instance.currentCharID === 10) {
                                            prefabBullet = this.laser2;
                                        }
                                        //Debug.Log("Shot");
                                        goBullet = SCR_Pool.GetFreeObject(prefabBullet);
                                        goBullet.SetActive(true);
                                        goBullet.transform.position = this.tfBullet.position.$clone();

                                        if (PlayerController.Instance.currentCharID === 7) {
                                            goBullet.transform.position = this.tfBullet.position.$clone().sub( new pc.Vec3( 0.2, 0, 0 ) );

                                            goBullet2 = SCR_Pool.GetFreeObject(prefabBullet);
                                            goBullet2.SetActive(true);
                                            goBullet2.transform.position = this.tfBullet.position.$clone().add( new pc.Vec3( 0.1, 0, 0 ) );
                                            this.StartCoroutine$1(this.CoDisableObject(goBullet2, 2));
                                        }

                                        this.StartCoroutine$1(this.CoDisableObject(goBullet, 2));
                                        this.fx_shoot.Play();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(timePerShoot);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (this.isShooter && !PlayerController.Instance.isCelebrate) {
                                            this.StartCoroutine$1(this.CoShootBullet(timePerShoot));
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CharacterController.CoShootBullet end.*/

            /*CharacterController.CoDisableObject start.*/
            CoDisableObject: function (go, delay) {
if ( TRACE ) { TRACE( "CharacterController#CoDisableObject", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    go.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CharacterController.CoDisableObject end.*/


        }
    });
    /*CharacterController end.*/

    /*BulletController start.*/
    Bridge.define("BulletController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            speed: 0,
            timeDisappear: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BulletController#init", this ); }

                this.speed = 10;
                this.timeDisappear = 2;
            }
        },
        methods: {
            /*BulletController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BulletController#Start", this ); }

                //StartCoroutine(CoDisappear());
            },
            /*BulletController.Start end.*/

            /*BulletController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BulletController#Update", this ); }

                this.transform.Translate$1(new pc.Vec3( 0, 0, 1 ).scale( UnityEngine.Time.deltaTime ).scale( this.speed ), UnityEngine.Space.World);
            },
            /*BulletController.Update end.*/

            /*BulletController.CoDisappear start.*/
            CoDisappear: function () {
if ( TRACE ) { TRACE( "BulletController#CoDisappear", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.timeDisappear);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.gameObject.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BulletController.CoDisappear end.*/


        }
    });
    /*BulletController end.*/

    /*ButtonTypes start.*/
    Bridge.define("ButtonTypes", {
        $kind: "enum",
        statics: {
            fields: {
                NotDefined: 0,
                Previous: 1,
                Next: 2
            }
        }
    });
    /*ButtonTypes end.*/

    /*CameraFollow start.*/
    Bridge.define("CameraFollow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            target: null,
            smoothing: 0,
            offset: null,
            isLook: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CameraFollow#init", this ); }

                this.offset = new UnityEngine.Vector3();
                this.smoothing = 5.0;
                this.isLook = false;
            }
        },
        methods: {
            /*CameraFollow.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CameraFollow#Start", this ); }

                // Calculate initial offset.
                this.offset = this.transform.position.$clone().sub( this.target.position );
            },
            /*CameraFollow.Start end.*/

            /*CameraFollow.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "CameraFollow#LateUpdate", this ); }

                if (!this.isLook) {
                    // Create a postion the camera is aiming for based on the offset from the target.
                    var targetCamPos = this.target.position.$clone().add( this.offset );

                    // Smoothly interpolate between camera's current position and it's target position.
                    this.transform.position = new pc.Vec3().lerp( this.transform.position, targetCamPos, this.smoothing * UnityEngine.Time.deltaTime );
                }
            },
            /*CameraFollow.LateUpdate end.*/

            /*CameraFollow.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CameraFollow#Update", this ); }

                if (this.isLook) {
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.ShortcutExtensions.DOLookAt(this.transform, this.target.position.$clone(), 0.2), DG.Tweening.Ease.Linear);
                }
            },
            /*CameraFollow.Update end.*/


        }
    });
    /*CameraFollow end.*/

    /*CanvasScalerMatch start.*/
    Bridge.define("CanvasScalerMatch", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            arAanvasScaler: null
        },
        methods: {
            /*CanvasScalerMatch.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "CanvasScalerMatch#OnEnable", this ); }

                var $t, $t1;
                if (UnityEngine.Camera.main.aspect >= 0.65) {
                    UnityEngine.Debug.Log$1("man may tinh bang");
                    $t = Bridge.getEnumerator(this.arAanvasScaler);
                    try {
                        while ($t.moveNext()) {
                            var scaler = $t.Current;
                            scaler.matchWidthOrHeight = 1;
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                } else {
                    UnityEngine.Debug.Log$1("man dien thoai");
                    $t1 = Bridge.getEnumerator(this.arAanvasScaler);
                    try {
                        while ($t1.moveNext()) {
                            var scaler1 = $t1.Current;
                            scaler1.matchWidthOrHeight = 0;
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            /*CanvasScalerMatch.OnEnable end.*/


        }
    });
    /*CanvasScalerMatch end.*/

    /*ClampScore start.*/
    Bridge.define("ClampScore", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            goScore: null
        },
        methods: {
            /*ClampScore.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ClampScore#Start", this ); }

                this.goScore.transform.position = UnityEngine.Camera.main.WorldToScreenPoint(this.transform.position);
            },
            /*ClampScore.Start end.*/

            /*ClampScore.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "ClampScore#FixedUpdate", this ); }

                var pos = UnityEngine.Camera.main.WorldToScreenPoint(this.transform.position);
                this.goScore.transform.position = pos.$clone();
            },
            /*ClampScore.FixedUpdate end.*/


        }
    });
    /*ClampScore end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos.$clone());
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x.$clone());
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x.$clone());
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Gradient}          gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Gradient}    gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       strength      The shake strength
                 * @param   {number}                       vibrato       Indicates how much will the shake vibrate
                 * @param   {number}                       randomness    Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                      fadeOut       If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {UnityEngine.Vector2}          strength      The shake strength on each axis
                 * @param   {number}                       vibrato       Indicates how much will the shake vibrate
                 * @param   {number}                       randomness    Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                      fadeOut       If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: "nested class",
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position.$clone());
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {UnityEngine.Gradient}    gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {UnityEngine.Gradient}    gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color.$clone());
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x.$clone());
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x.$clone());
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: "nested class",
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*Direction start.*/
    Bridge.define("Direction", {
        $kind: "enum",
        statics: {
            fields: {
                Forward: 0,
                Left: 1,
                Right: 2
            }
        }
    });
    /*Direction end.*/

    /*DispatcherType start.*/
    Bridge.define("DispatcherType", {
        $kind: "enum",
        statics: {
            fields: {
                Early: 0,
                Normal: 1,
                Late: 2
            }
        }
    });
    /*DispatcherType end.*/

    /*EnemyController start.*/
    Bridge.define("EnemyController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            allRig: null,
            isKnockout: false,
            arEnemySkin: null,
            dirFly: null,
            currentEnemySkinID: 0,
            isMulti: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EnemyController#init", this ); }

                this.dirFly = new UnityEngine.Vector3();
                this.isKnockout = false;
                this.isMulti = false;
            }
        },
        methods: {
            /*EnemyController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EnemyController#Start", this ); }

                var $t;
                this.allRig = this.GetComponentsInChildren(UnityEngine.Rigidbody);
                $t = Bridge.getEnumerator(this.allRig);
                try {
                    while ($t.moveNext()) {
                        var rig = $t.Current;
                        rig.isKinematic = true;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.dirFly = new pc.Vec3( -10, 5, 5 );

                var arColors = System.Array.init([UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(198, 65, 59, 255)), UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(0, 92, 179, 255)), UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(0, 180, 0, 255)), UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(200, 186, 0, 255))], UnityEngine.Color);
                //transform.GetChild(0).GetComponent<SkinnedMeshRenderer>().material.color = Random.ColorHSV(0f, 1f, 1f, 1f, 1, 1f);
                this.transform.GetChild(0).GetComponent(UnityEngine.SkinnedMeshRenderer).material.color = arColors[UnityEngine.Random.Range(0, arColors.length)].$clone();
                //OnLoadSkin(null);

                if (!this.isMulti) {
                    this.GetComponent(UnityEngine.Animator).Play$2("idle" + UnityEngine.Random.Range(1, 3));
                }
            },
            /*EnemyController.Start end.*/

            /*EnemyController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "EnemyController#Update", this ); }

                var hit = { v : new UnityEngine.RaycastHit() };
                UnityEngine.Debug.DrawRay$1(this.transform.position.$clone().add( pc.Vec3.UP.clone() ), this.transform.forward.$clone().scale( 3 ), new pc.Color( 1, 0, 0, 1 ));
                if (UnityEngine.Physics.Raycast$3(this.transform.position.$clone().add( pc.Vec3.UP.clone() ), this.transform.forward, hit, 3)) {
                    if (hit.v.collider.CompareTag("Main")) {
                        if (!this.isMulti) {
                            this.GetComponent(UnityEngine.Animator).SetTrigger$1("bot_punch");
                        }
                    }
                }
            },
            /*EnemyController.Update end.*/

            /*EnemyController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "EnemyController#OnEnable", this ); }

                EventDispatcherExtension.RegisterListener(this, EventID.OnEnemyLoadSkin, Bridge.fn.cacheBind(this, this.OnLoadSkin));
            },
            /*EnemyController.OnEnable end.*/

            /*EnemyController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "EnemyController#OnDisable", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(LazySingleton$1(EventDispatcher).Instance, null)) {
                    LazySingleton$1(EventDispatcher).Instance.RemoveListener(EventID.OnEnemyLoadSkin, Bridge.fn.cacheBind(this, this.OnLoadSkin));
                }
            },
            /*EnemyController.OnDisable end.*/

            /*EnemyController.OnLoadSkin start.*/
            OnLoadSkin: function (obj) {
if ( TRACE ) { TRACE( "EnemyController#OnLoadSkin", this ); }

                if (this.arEnemySkin.length > 0) {
                    for (var i = 0; i < this.arEnemySkin.length; i = (i + 1) | 0) {
                        this.arEnemySkin[i].gameObject.SetActive(false);
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
                    var skinID;
                    if (PlayerController.Instance.currentCharID < 2) {
                        skinID = 0;
                    } else {
                        if (PlayerController.Instance.currentCharID < 6) {
                            skinID = 1;
                        } else {
                            if (PlayerController.Instance.currentCharID < 8) {
                                skinID = 2;
                            } else {
                                skinID = 3;
                            }
                        }
                    }


                    this.arEnemySkin[skinID].gameObject.SetActive(true);
                    //Debug.Log(skinID + " " + PlayerController.Instance.currentEnemySkinID);
                    if (skinID !== this.currentEnemySkinID) {
                        this.arEnemySkin[skinID].transform.localScale = pc.Vec3.ZERO.clone();
                        DG.Tweening.ShortcutExtensions.DOScale$1(this.arEnemySkin[skinID].transform, new pc.Vec3( 1, 1, 1 ), 0.2);
                    }

                    this.currentEnemySkinID = skinID;
                }
            },
            /*EnemyController.OnLoadSkin end.*/

            /*EnemyController.Knockout start.*/
            Knockout: function (isShot) {
if ( TRACE ) { TRACE( "EnemyController#Knockout", this ); }

                var $t;
                this.isKnockout = true;
                GameManager.Instance.ShowCoinFX(this.transform.position.$clone().add( new pc.Vec3( 0, 0.1, 1 ) ));
                this.GetComponent(UnityEngine.Animator).enabled = false;
                this.GetComponent(UnityEngine.BoxCollider).enabled = false;
                $t = Bridge.getEnumerator(this.allRig);
                try {
                    while ($t.moveNext()) {
                        var rig = $t.Current;
                        rig.isKinematic = false;
                        if (isShot) {
                            rig.AddForce$1(new pc.Vec3( 0, 5, 5 ), UnityEngine.ForceMode.Impulse);
                        } else {
                            rig.AddForce$1(this.dirFly, UnityEngine.ForceMode.Impulse);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.dirFly = pc.Vec3.ZERO.clone();
                this.StartCoroutine$1(this.BotDied());

                //Camera.main.transform.GetComponent<Shake>().start = true;

                //if (PlayerController.Instance.isEnding)
                //{
                //    PlayerController.Instance.ShowTextMultiplier();
                //}
            },
            /*EnemyController.Knockout end.*/

            /*EnemyController.BotDied start.*/
            BotDied: function () {
if ( TRACE ) { TRACE( "EnemyController#BotDied", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*EnemyController.BotDied end.*/


        }
    });
    /*EnemyController end.*/

    /*EpicToonFX.ETFXButtonScript start.*/
    Bridge.define("EpicToonFX.ETFXButtonScript", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Button: null,
            MyButtonText: null,
            projectileParticleName: null,
            effectScript: null,
            projectileScript: null,
            buttonsX: 0,
            buttonsY: 0,
            buttonsSizeX: 0,
            buttonsSizeY: 0,
            buttonsDistance: 0
        },
        methods: {
            /*EpicToonFX.ETFXButtonScript.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXButtonScript#Start", this ); }

                this.effectScript = UnityEngine.GameObject.Find("ETFXFireProjectile").GetComponent(EpicToonFX.ETFXFireProjectile);
                this.getProjectileNames();
                this.MyButtonText = this.Button.transform.Find("Text").GetComponent(UnityEngine.UI.Text);
                this.MyButtonText.text = this.projectileParticleName;
            },
            /*EpicToonFX.ETFXButtonScript.Start end.*/

            /*EpicToonFX.ETFXButtonScript.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXButtonScript#Update", this ); }

                this.MyButtonText.text = this.projectileParticleName;
                //		print(projectileParticleName);
            },
            /*EpicToonFX.ETFXButtonScript.Update end.*/

            /*EpicToonFX.ETFXButtonScript.getProjectileNames start.*/
            getProjectileNames: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXButtonScript#getProjectileNames", this ); }

                var $t;
                // Access the currently selected projectile's 'ProjectileScript'
                this.projectileScript = ($t = this.effectScript.projectiles)[this.effectScript.currentProjectile].GetComponent(ETFXProjectileScript);
                this.projectileParticleName = this.projectileScript.projectileParticle.name; // Assign the name of the currently selected projectile to projectileParticleName
            },
            /*EpicToonFX.ETFXButtonScript.getProjectileNames end.*/

            /*EpicToonFX.ETFXButtonScript.overButton start.*/
            overButton: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXButtonScript#overButton", this ); }

                var button1 = new UnityEngine.Rect.$ctor1(this.buttonsX, this.buttonsY, this.buttonsSizeX, this.buttonsSizeY);
                var button2 = new UnityEngine.Rect.$ctor1(this.buttonsX + this.buttonsDistance, this.buttonsY, this.buttonsSizeX, this.buttonsSizeY);

                if (button1.Contains(new pc.Vec2( UnityEngine.Input.mousePosition.x, UnityEngine.Screen.height - UnityEngine.Input.mousePosition.y )) || button2.Contains(new pc.Vec2( UnityEngine.Input.mousePosition.x, UnityEngine.Screen.height - UnityEngine.Input.mousePosition.y ))) {
                    return true;
                } else {
                    return false;
                }
            },
            /*EpicToonFX.ETFXButtonScript.overButton end.*/


        }
    });
    /*EpicToonFX.ETFXButtonScript end.*/

    /*EpicToonFX.ETFXFireProjectile start.*/
    Bridge.define("EpicToonFX.ETFXFireProjectile", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            hit: null,
            projectiles: null,
            spawnPosition: null,
            currentProjectile: 0,
            speed: 0,
            selectedProjectileButton: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXFireProjectile#init", this ); }

                this.hit = new UnityEngine.RaycastHit();
                this.currentProjectile = 0;
                this.speed = 1000;
            }
        },
        methods: {
            /*EpicToonFX.ETFXFireProjectile.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXFireProjectile#Start", this ); }

                this.selectedProjectileButton = UnityEngine.GameObject.Find("Button").GetComponent(EpicToonFX.ETFXButtonScript);
            },
            /*EpicToonFX.ETFXFireProjectile.Start end.*/

            /*EpicToonFX.ETFXFireProjectile.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXFireProjectile#Update", this ); }

                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.RightArrow)) {
                    this.nextEffect();
                }

                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.D)) {
                    this.nextEffect();
                }

                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.A)) {
                    this.previousEffect();
                } else if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.LeftArrow)) {
                    this.previousEffect();
                }

                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.Mouse0)) {

                    if (!UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject()) {
                        if (UnityEngine.Physics.Raycast$1(UnityEngine.Camera.main.ScreenPointToRay(UnityEngine.Input.mousePosition.$clone()), Bridge.ref(this, "hit"), 100.0)) {
                            var projectile = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.projectiles[this.currentProjectile], this.spawnPosition.position.$clone(), pc.Quat.IDENTITY.clone());
                            projectile.transform.LookAt$2(this.hit.point.$clone());
                            projectile.GetComponent(UnityEngine.Rigidbody).AddForce$1(projectile.transform.forward.$clone().scale( this.speed ));
                            projectile.GetComponent(ETFXProjectileScript).impactNormal = this.hit.normal.$clone();
                        }
                    }

                }
                UnityEngine.Debug.DrawRay$1(UnityEngine.Camera.main.ScreenPointToRay(UnityEngine.Input.mousePosition.$clone()).origin.$clone(), UnityEngine.Camera.main.ScreenPointToRay(UnityEngine.Input.mousePosition.$clone()).direction.$clone().scale( 100 ), new pc.Color( 1, 1, 0, 1 ));
            },
            /*EpicToonFX.ETFXFireProjectile.Update end.*/

            /*EpicToonFX.ETFXFireProjectile.nextEffect start.*/
            nextEffect: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXFireProjectile#nextEffect", this ); }

                if (this.currentProjectile < ((this.projectiles.length - 1) | 0)) {
                    this.currentProjectile = (this.currentProjectile + 1) | 0;
                } else {
                    this.currentProjectile = 0;
                }
                this.selectedProjectileButton.getProjectileNames();
            },
            /*EpicToonFX.ETFXFireProjectile.nextEffect end.*/

            /*EpicToonFX.ETFXFireProjectile.previousEffect start.*/
            previousEffect: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXFireProjectile#previousEffect", this ); }

                if (this.currentProjectile > 0) {
                    this.currentProjectile = (this.currentProjectile - 1) | 0;
                } else {
                    this.currentProjectile = (this.projectiles.length - 1) | 0;
                }
                this.selectedProjectileButton.getProjectileNames();
            },
            /*EpicToonFX.ETFXFireProjectile.previousEffect end.*/

            /*EpicToonFX.ETFXFireProjectile.AdjustSpeed start.*/
            AdjustSpeed: function (newSpeed) {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXFireProjectile#AdjustSpeed", this ); }

                this.speed = newSpeed;
            },
            /*EpicToonFX.ETFXFireProjectile.AdjustSpeed end.*/


        }
    });
    /*EpicToonFX.ETFXFireProjectile end.*/

    /*EpicToonFX.ETFXLightFade start.*/
    Bridge.define("EpicToonFX.ETFXLightFade", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            life: 0,
            killAfterLife: false,
            li: null,
            initIntensity: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXLightFade#init", this ); }

                this.life = 0.2;
                this.killAfterLife = true;
            }
        },
        methods: {
            /*EpicToonFX.ETFXLightFade.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXLightFade#Start", this ); }

                if (UnityEngine.Object.op_Implicit(this.gameObject.GetComponent(UnityEngine.Light))) {
                    this.li = this.gameObject.GetComponent(UnityEngine.Light);
                    this.initIntensity = this.li.intensity;
                } else {
                    UnityEngine.MonoBehaviour.print("No light object found on " + (this.gameObject.name || ""));
                }
            },
            /*EpicToonFX.ETFXLightFade.Start end.*/

            /*EpicToonFX.ETFXLightFade.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXLightFade#Update", this ); }

                if (UnityEngine.Object.op_Implicit(this.gameObject.GetComponent(UnityEngine.Light))) {
                    this.li.intensity -= this.initIntensity * (UnityEngine.Time.deltaTime / this.life);
                    if (this.killAfterLife && this.li.intensity <= 0) {
                        UnityEngine.Object.Destroy(this.gameObject.GetComponent(UnityEngine.Light));
                    }
                }
            },
            /*EpicToonFX.ETFXLightFade.Update end.*/


        }
    });
    /*EpicToonFX.ETFXLightFade end.*/

    /*EpicToonFX.ETFXLoopScript start.*/
    Bridge.define("EpicToonFX.ETFXLoopScript", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            chosenEffect: null,
            loopTimeLimit: 0,
            spawnWithoutLight: false,
            spawnWithoutSound: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXLoopScript#init", this ); }

                this.loopTimeLimit = 2.0;
                this.spawnWithoutLight = true;
                this.spawnWithoutSound = true;
            }
        },
        methods: {
            /*EpicToonFX.ETFXLoopScript.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXLoopScript#Start", this ); }

                this.PlayEffect();
            },
            /*EpicToonFX.ETFXLoopScript.Start end.*/

            /*EpicToonFX.ETFXLoopScript.PlayEffect start.*/
            PlayEffect: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXLoopScript#PlayEffect", this ); }

                this.StartCoroutine$2("EffectLoop");
            },
            /*EpicToonFX.ETFXLoopScript.PlayEffect end.*/

            /*EpicToonFX.ETFXLoopScript.EffectLoop start.*/
            EffectLoop: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXLoopScript#EffectLoop", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    effectPlayer,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    effectPlayer = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.chosenEffect, this.transform.position.$clone(), this.transform.rotation.$clone());

                                        if ((this.spawnWithoutLight = true && UnityEngine.Object.op_Implicit(effectPlayer.GetComponent(UnityEngine.Light)))) {
                                            effectPlayer.GetComponent(UnityEngine.Light).enabled = false;
                                            //Destroy(gameObject.GetComponent<Light>());

                                        }

                                        if ((this.spawnWithoutSound = true && UnityEngine.Object.op_Implicit(effectPlayer.GetComponent(UnityEngine.AudioSource)))) {
                                            effectPlayer.GetComponent(UnityEngine.AudioSource).enabled = false;
                                            //Destroy(gameObject.GetComponent<AudioSource>());
                                        }

                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.loopTimeLimit);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    UnityEngine.MonoBehaviour.Destroy(effectPlayer);
                                        this.PlayEffect();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*EpicToonFX.ETFXLoopScript.EffectLoop end.*/


        }
    });
    /*EpicToonFX.ETFXLoopScript end.*/

    /*EpicToonFX.ETFXMouseOrbit start.*/
    Bridge.define("EpicToonFX.ETFXMouseOrbit", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*EpicToonFX.ETFXMouseOrbit.ClampAngle:static start.*/
                ClampAngle: function (angle, min, max) {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXMouseOrbit#ClampAngle", this ); }

                    if (angle < -360.0) {
                        angle += 360.0;
                    }
                    if (angle > 360.0) {
                        angle -= 360.0;
                    }
                    return Math.max(min, Math.min(angle, max));
                },
                /*EpicToonFX.ETFXMouseOrbit.ClampAngle:static end.*/


            }
        },
        fields: {
            target: null,
            distance: 0,
            xSpeed: 0,
            ySpeed: 0,
            yMinLimit: 0,
            yMaxLimit: 0,
            distanceMin: 0,
            distanceMax: 0,
            smoothTime: 0,
            rotationYAxis: 0,
            rotationXAxis: 0,
            velocityX: 0,
            velocityY: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXMouseOrbit#init", this ); }

                this.distance = 5.0;
                this.xSpeed = 120.0;
                this.ySpeed = 120.0;
                this.yMinLimit = -20.0;
                this.yMaxLimit = 80.0;
                this.distanceMin = 0.5;
                this.distanceMax = 15.0;
                this.smoothTime = 2.0;
                this.rotationYAxis = 0.0;
                this.rotationXAxis = 0.0;
                this.velocityX = 0.0;
                this.velocityY = 0.0;
            }
        },
        methods: {
            /*EpicToonFX.ETFXMouseOrbit.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXMouseOrbit#Start", this ); }

                var angles = this.transform.eulerAngles.$clone();
                this.rotationYAxis = angles.y;
                this.rotationXAxis = angles.x;
                // Make the rigid body not change rotation
                if (UnityEngine.Object.op_Implicit(this.GetComponent(UnityEngine.Rigidbody))) {
                    this.GetComponent(UnityEngine.Rigidbody).freezeRotation = true;
                }
            },
            /*EpicToonFX.ETFXMouseOrbit.Start end.*/

            /*EpicToonFX.ETFXMouseOrbit.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXMouseOrbit#LateUpdate", this ); }

                if (UnityEngine.Object.op_Implicit(this.target)) {
                    if (UnityEngine.Input.GetMouseButton(1)) {
                        this.velocityX += this.xSpeed * UnityEngine.Input.GetAxis("Mouse X") * this.distance * 0.02;
                        this.velocityY += this.ySpeed * UnityEngine.Input.GetAxis("Mouse Y") * 0.02;
                    }
                    this.rotationYAxis += this.velocityX;
                    this.rotationXAxis -= this.velocityY;
                    this.rotationXAxis = EpicToonFX.ETFXMouseOrbit.ClampAngle(this.rotationXAxis, this.yMinLimit, this.yMaxLimit);
                    //Quaternion fromRotation = Quaternion.Euler(transform.rotation.eulerAngles.x, transform.rotation.eulerAngles.y, 0);
                    var toRotation = new pc.Quat().setFromEulerAngles_Unity( this.rotationXAxis, this.rotationYAxis, 0 );
                    var rotation = toRotation.$clone();

                    this.distance = Math.max(this.distanceMin, Math.min(this.distance - UnityEngine.Input.GetAxis("Mouse ScrollWheel") * 5, this.distanceMax));
                    var hit = { v : new UnityEngine.RaycastHit() };
                    if (UnityEngine.Physics.Linecast$3(this.target.position.$clone(), this.transform.position.$clone(), hit)) {
                        this.distance -= hit.v.distance;
                    }
                    var negDistance = new pc.Vec3( 0.0, 0.0, -this.distance );
                    var position = rotation.transformVector( negDistance ).add( this.target.position );

                    this.transform.rotation = rotation.$clone();
                    this.transform.position = position.$clone();
                    this.velocityX = pc.math.lerp(this.velocityX, 0, UnityEngine.Time.deltaTime * this.smoothTime);
                    this.velocityY = pc.math.lerp(this.velocityY, 0, UnityEngine.Time.deltaTime * this.smoothTime);
                }
            },
            /*EpicToonFX.ETFXMouseOrbit.LateUpdate end.*/


        }
    });
    /*EpicToonFX.ETFXMouseOrbit end.*/

    /*EpicToonFX.ETFXPitchRandomizer start.*/
    Bridge.define("EpicToonFX.ETFXPitchRandomizer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            randomPercent: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXPitchRandomizer#init", this ); }

                this.randomPercent = 10;
            }
        },
        methods: {
            /*EpicToonFX.ETFXPitchRandomizer.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXPitchRandomizer#Start", this ); }

                var $t;
                $t = this.transform.GetComponent(UnityEngine.AudioSource);
                $t.pitch *= 1 + UnityEngine.Random.Range$1(-this.randomPercent / 100, this.randomPercent / 100);
            },
            /*EpicToonFX.ETFXPitchRandomizer.Start end.*/


        }
    });
    /*EpicToonFX.ETFXPitchRandomizer end.*/

    /*EpicToonFX.ETFXRotation start.*/
    Bridge.define("EpicToonFX.ETFXRotation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rotateVector: null,
            rotateSpace: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXRotation#init", this ); }

                this.rotateVector = new UnityEngine.Vector3();
                this.rotateVector = pc.Vec3.ZERO.clone();
            }
        },
        methods: {
            /*EpicToonFX.ETFXRotation.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXRotation#Start", this ); }


            },
            /*EpicToonFX.ETFXRotation.Start end.*/

            /*EpicToonFX.ETFXRotation.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXRotation#Update", this ); }

                if (this.rotateSpace === EpicToonFX.ETFXRotation.spaceEnum.Local) {
                    this.transform.Rotate$2(this.rotateVector.$clone().scale( UnityEngine.Time.deltaTime ));
                }
                if (this.rotateSpace === EpicToonFX.ETFXRotation.spaceEnum.World) {
                    this.transform.Rotate$2(this.rotateVector.$clone().scale( UnityEngine.Time.deltaTime ), UnityEngine.Space.World);
                }
            },
            /*EpicToonFX.ETFXRotation.Update end.*/


        }
    });
    /*EpicToonFX.ETFXRotation end.*/

    /*EpicToonFX.ETFXRotation+spaceEnum start.*/
    Bridge.define("EpicToonFX.ETFXRotation.spaceEnum", {
        $kind: "nested enum",
        statics: {
            fields: {
                Local: 0,
                World: 1
            }
        }
    });
    /*EpicToonFX.ETFXRotation+spaceEnum end.*/

    /*ETFXProjectileScript start.*/
    Bridge.define("ETFXProjectileScript", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            impactParticle: null,
            projectileParticle: null,
            muzzleParticle: null,
            trailParticles: null,
            impactNormal: null,
            hasCollided: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ETFXProjectileScript#init", this ); }

                this.impactNormal = new UnityEngine.Vector3();
                this.hasCollided = false;
            }
        },
        methods: {
            /*ETFXProjectileScript.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ETFXProjectileScript#Start", this ); }

                this.projectileParticle = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.projectileParticle, this.transform.position.$clone(), this.transform.rotation.$clone());
                this.projectileParticle.transform.parent = this.transform;
                if (UnityEngine.Object.op_Implicit(this.muzzleParticle)) {
                    this.muzzleParticle = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.muzzleParticle, this.transform.position.$clone(), this.transform.rotation.$clone());
                    this.Destroy(this.muzzleParticle, 1.5); // Lifetime of muzzle effect.
                }
            },
            /*ETFXProjectileScript.Start end.*/

            /*ETFXProjectileScript.OnCollisionEnter start.*/
            OnCollisionEnter: function (hit) {
if ( TRACE ) { TRACE( "ETFXProjectileScript#OnCollisionEnter", this ); }

                var $t;
                if (!this.hasCollided) {
                    this.hasCollided = true;
                    //transform.DetachChildren();
                    this.impactParticle = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.impactParticle, this.transform.position.$clone(), new pc.Quat().fromTo( pc.Vec3.UP.clone(), this.impactNormal ));
                    //Debug.DrawRay(hit.contacts[0].point, hit.contacts[0].normal * 1, Color.yellow);

                    if (Bridge.referenceEquals(hit.gameObject.tag, "Destructible")) {
                        UnityEngine.MonoBehaviour.Destroy(hit.gameObject);
                    }


                    //yield WaitForSeconds (0.05);
                    $t = Bridge.getEnumerator(this.trailParticles);
                    try {
                        while ($t.moveNext()) {
                            var trail = $t.Current;
                            var curTrail = this.transform.Find((this.projectileParticle.name || "") + "/" + (trail.name || "")).gameObject;
                            curTrail.transform.parent = null;
                            this.Destroy(curTrail, 3.0);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    this.Destroy(this.projectileParticle, 3.0);
                    this.Destroy(this.impactParticle, 5.0);
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    //projectileParticle.Stop();

                    var trails = this.GetComponentsInChildren(UnityEngine.ParticleSystem);
                    //Component at [0] is that of the parent i.e. this object (if there is any)
                    for (var i = 1; i < trails.length; i = (i + 1) | 0) {
                        var trail1 = trails[i];
                        if (!System.String.contains(trail1.gameObject.name,"Trail")) {
                            continue;
                        }

                        trail1.transform.SetParent(null);
                        this.Destroy(trail1.gameObject, 2);
                    }
                }
            },
            /*ETFXProjectileScript.OnCollisionEnter end.*/


        }
    });
    /*ETFXProjectileScript end.*/

    /*ETFXSceneManager start.*/
    Bridge.define("ETFXSceneManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            GUIHide: false,
            GUIHide2: false,
            GUIHide3: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#init", this ); }

                this.GUIHide = false;
                this.GUIHide2 = false;
                this.GUIHide3 = false;
            }
        },
        methods: {
            /*ETFXSceneManager.LoadScene1 start.*/
            LoadScene1: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene1", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_explosions");
            },
            /*ETFXSceneManager.LoadScene1 end.*/

            /*ETFXSceneManager.LoadScene2 start.*/
            LoadScene2: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene2", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_explosions2");
            },
            /*ETFXSceneManager.LoadScene2 end.*/

            /*ETFXSceneManager.LoadScene3 start.*/
            LoadScene3: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene3", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_portals");
            },
            /*ETFXSceneManager.LoadScene3 end.*/

            /*ETFXSceneManager.LoadScene4 start.*/
            LoadScene4: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene4", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_magic");
            },
            /*ETFXSceneManager.LoadScene4 end.*/

            /*ETFXSceneManager.LoadScene5 start.*/
            LoadScene5: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene5", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_emojis");
            },
            /*ETFXSceneManager.LoadScene5 end.*/

            /*ETFXSceneManager.LoadScene6 start.*/
            LoadScene6: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene6", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_sparkles");
            },
            /*ETFXSceneManager.LoadScene6 end.*/

            /*ETFXSceneManager.LoadScene7 start.*/
            LoadScene7: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene7", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_fireworks");
            },
            /*ETFXSceneManager.LoadScene7 end.*/

            /*ETFXSceneManager.LoadScene8 start.*/
            LoadScene8: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene8", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_powerups");
            },
            /*ETFXSceneManager.LoadScene8 end.*/

            /*ETFXSceneManager.LoadScene9 start.*/
            LoadScene9: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene9", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_swordcombat");
            },
            /*ETFXSceneManager.LoadScene9 end.*/

            /*ETFXSceneManager.LoadScene10 start.*/
            LoadScene10: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene10", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_maindemo");
            },
            /*ETFXSceneManager.LoadScene10 end.*/

            /*ETFXSceneManager.LoadScene11 start.*/
            LoadScene11: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene11", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_combat");
            },
            /*ETFXSceneManager.LoadScene11 end.*/

            /*ETFXSceneManager.LoadScene12 start.*/
            LoadScene12: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene12", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_2ddemo");
            },
            /*ETFXSceneManager.LoadScene12 end.*/

            /*ETFXSceneManager.LoadScene13 start.*/
            LoadScene13: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene13", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_missiles");
            },
            /*ETFXSceneManager.LoadScene13 end.*/

            /*ETFXSceneManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#Update", this ); }


                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.L)) {
                    this.GUIHide = !this.GUIHide;

                    if (this.GUIHide) {
                        UnityEngine.GameObject.Find("CanvasSceneSelect").GetComponent(UnityEngine.Canvas).enabled = false;
                    } else {
                        UnityEngine.GameObject.Find("CanvasSceneSelect").GetComponent(UnityEngine.Canvas).enabled = true;
                    }
                }
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.J)) {
                    this.GUIHide2 = !this.GUIHide2;

                    if (this.GUIHide2) {
                        UnityEngine.GameObject.Find("Canvas").GetComponent(UnityEngine.Canvas).enabled = false;
                    } else {
                        UnityEngine.GameObject.Find("Canvas").GetComponent(UnityEngine.Canvas).enabled = true;
                    }
                }
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.H)) {
                    this.GUIHide3 = !this.GUIHide3;

                    if (this.GUIHide3) {
                        UnityEngine.GameObject.Find("ParticleSysDisplayCanvas").GetComponent(UnityEngine.Canvas).enabled = false;
                    } else {
                        UnityEngine.GameObject.Find("ParticleSysDisplayCanvas").GetComponent(UnityEngine.Canvas).enabled = true;
                    }
                }
            },
            /*ETFXSceneManager.Update end.*/


        }
    });
    /*ETFXSceneManager end.*/

    /*LazySingleton$1 start.*/
    Bridge.define("LazySingleton$1", function (T) { return {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                singletonDestroyed: false,
                instance: Bridge.getDefaultValue(T)
            },
            props: {
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "LazySingleton$1#Instance#get", this ); }

                        if (LazySingleton$1(T).singletonDestroyed) {
                            //Debug.LogWarningFormat("[Singleton] Singleton was already destroyed by quiting game. Returning null", Array.Empty<object>());
                            return null;
                        }
                        if (!Bridge.rValue(LazySingleton$1(T).instance)) {
                            new UnityEngine.GameObject.$ctor2(Bridge.getTypeName(T)).AddComponent(T);
                        }
                        return Bridge.rValue(LazySingleton$1(T).instance);
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "LazySingleton$1#init", this ); }

                    this.instance = Bridge.getDefaultValue(T);
                }
            }
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "LazySingleton$1#ctor", this ); }

                this.$initialize();
                UnityEngine.MonoBehaviour.ctor.call(this);

            }
        },
        methods: {
            /*LazySingleton$1.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "LazySingleton$1#Awake", this ); }

                if ((Bridge.rValue(LazySingleton$1(T).instance) == null) && !LazySingleton$1(T).singletonDestroyed) {
                    LazySingleton$1(T).instance = Bridge.as(this, T);
                } else if (UnityEngine.MonoBehaviour.op_Inequality(Bridge.rValue(LazySingleton$1(T).instance), this)) {
                    UnityEngine.Object.Destroy(this);
                }
            },
            /*LazySingleton$1.Awake end.*/

            /*LazySingleton$1.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "LazySingleton$1#OnDestroy", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(Bridge.rValue(LazySingleton$1(T).instance), this)) {
                    LazySingleton$1(T).singletonDestroyed = true;
                    LazySingleton$1(T).instance = null;
                }
            },
            /*LazySingleton$1.OnDestroy end.*/


        }
    }; });
    /*LazySingleton$1 end.*/

    /*EventDispatcherExtension start.*/
    Bridge.define("EventDispatcherExtension", {
        statics: {
            methods: {
                /*EventDispatcherExtension.RegisterListener:static start.*/
                RegisterListener: function (listener, eventID, callback, eventType) {
if ( TRACE ) { TRACE( "EventDispatcherExtension#RegisterListener", this ); }

                    if (eventType === void 0) { eventType = 1; }
                    LazySingleton$1(EventDispatcher).Instance.RegisterListener(eventID, callback, eventType);
                },
                /*EventDispatcherExtension.RegisterListener:static end.*/

                /*EventDispatcherExtension.PostEvent$1:static start.*/
                PostEvent$1: function (listener, eventID, param) {
if ( TRACE ) { TRACE( "EventDispatcherExtension#PostEvent$1", this ); }

                    LazySingleton$1(EventDispatcher).Instance.PostEvent(eventID, param);
                },
                /*EventDispatcherExtension.PostEvent$1:static end.*/

                /*EventDispatcherExtension.PostEvent:static start.*/
                PostEvent: function (sender, eventID) {
if ( TRACE ) { TRACE( "EventDispatcherExtension#PostEvent", this ); }

                    LazySingleton$1(EventDispatcher).Instance.PostEvent(eventID);
                },
                /*EventDispatcherExtension.PostEvent:static end.*/


            }
        }
    });
    /*EventDispatcherExtension end.*/

    /*EventID start.*/
    Bridge.define("EventID", {
        $kind: "enum",
        statics: {
            fields: {
                OnLoadSkin: 99,
                OnCharRun: 100,
                OnCharAttackMelee: 101,
                OnIncreaseAnim: 102,
                OnVictory: 103,
                OnAttackBoss: 104,
                OnShowFxUp: 105,
                OnShowFxDown: 106,
                OnDefeat: 107,
                OnChangeDistanceHitbox: 110,
                OnFightBegin: 125,
                OnFightDefeat: 126,
                OnShowFxHitted: 127,
                OnTurnOffAllSkin: 128,
                OnEnemyLoadSkin: 131,
                OnStopAllCoroutines: 141
            }
        }
    });
    /*EventID end.*/

    /*FighterController start.*/
    Bridge.define("FighterController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            fighterID: 0,
            totalHP: 0,
            dps: 0,
            currentHP: 0,
            hpBar: null,
            opponent: null,
            tfChar: null,
            isBoss: false,
            obj: null,
            tapToAttackHint: null
        },
        methods: {
            /*FighterController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "FighterController#Start", this ); }


            },
            /*FighterController.Start end.*/

            /*FighterController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "FighterController#Update", this ); }


            },
            /*FighterController.Update end.*/

            /*FighterController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "FighterController#OnEnable", this ); }

                EventDispatcherExtension.RegisterListener(this, EventID.OnFightBegin, Bridge.fn.cacheBind(this, this.OnBeginFighting));

            },
            /*FighterController.OnEnable end.*/

            /*FighterController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "FighterController#OnDisable", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(LazySingleton$1(EventDispatcher).Instance, null)) {
                    LazySingleton$1(EventDispatcher).Instance.RemoveListener(EventID.OnFightBegin, Bridge.fn.cacheBind(this, this.OnBeginFighting));
                }
            },
            /*FighterController.OnDisable end.*/

            /*FighterController.OnBeginFighting start.*/
            OnBeginFighting: function (obj) {
if ( TRACE ) { TRACE( "FighterController#OnBeginFighting", this ); }

                this.Invoke("AttackByTime", 0.7);
                //AttackByTime();
            },
            /*FighterController.OnBeginFighting end.*/

            /*FighterController.OnBeHit start.*/
            OnBeHit: function (damage) {
if ( TRACE ) { TRACE( "FighterController#OnBeHit", this ); }

                //Debug.Log("OnBeHit");
                this.currentHP -= damage;
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFillAmount(this.hpBar.transform.GetChild(1).GetComponent(UnityEngine.UI.Image), this.currentHP / this.totalHP, 0.4), DG.Tweening.Ease.OutCubic);
                DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFillAmount(this.hpBar.transform.GetChild(0).GetComponent(UnityEngine.UI.Image), this.currentHP / this.totalHP, 0.2), DG.Tweening.Ease.OutCubic), 0.7);

                //GameObject goHPLost = (GameObject)Resources.Load("Prefabs/UI/Text HP Lost", typeof(GameObject));
                var goHPLost = UnityEngine.Object.Instantiate(UnityEngine.GameObject, GameManager.Instance.prefabHpLost, GameManager.Instance.panelFighting);
                goHPLost.SetActive(true);
                goHPLost.transform.localScale = new pc.Vec3( 1, 1, 1 );
                goHPLost.GetComponent(UnityEngine.UI.Text).text = "-" + System.Single.format(damage);
                goHPLost.transform.position = UnityEngine.Camera.main.WorldToScreenPoint(this.tfChar.position).add( new pc.Vec3( 0, 300, 0 ) );
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.ShortcutExtensions.DOLocalJump(goHPLost.transform, goHPLost.transform.localPosition.$clone().add( new pc.Vec3( 100, 0, 0 ) ), 100, 1, 0.8), DG.Tweening.Ease.Linear);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(goHPLost.transform, 0, 0.3), 0.7), DG.Tweening.Ease.Linear), function () {
                    goHPLost.gameObject.SetActive(false);
                });
                if (this.currentHP <= 0) {
                    this.OnDefeat();
                }
            },
            /*FighterController.OnBeHit end.*/

            /*FighterController.OnDefeat start.*/
            OnDefeat: function () {
if ( TRACE ) { TRACE( "FighterController#OnDefeat", this ); }

                if (this.isBoss) {
                    UnityEngine.Debug.Log$1("win");
                    this.StartCoroutine$1(this.CoTimeScale(1));
                    UnityEngine.Camera.main.gameObject.SetActive(false);
                    this.transform.GetChild(0).gameObject.SetActive(true);
                    this.transform.GetChild(1).GetComponent(CharacterController).isDefeat = true;
                    this.transform.GetChild(1).GetComponent(CharacterController).fx_hitted.gameObject.SetActive(false);

                    EventDispatcherExtension.PostEvent(this, EventID.OnFightDefeat);
                    EventDispatcherExtension.PostEvent(this, EventID.OnStopAllCoroutines);

                    this.StartCoroutine$1(this.CoWaitCameraWin());
                } else {
                    UnityEngine.Debug.Log$1("lose");
                    this.StartCoroutine$1(this.CoTimeScale(1));

                    EventDispatcherExtension.PostEvent(this, EventID.OnTurnOffAllSkin);
                    EventDispatcherExtension.PostEvent(this, EventID.OnStopAllCoroutines);

                    UnityEngine.Camera.main.gameObject.SetActive(false);
                    this.opponent.transform.GetChild(0).gameObject.SetActive(true);
                    this.opponent.transform.GetChild(0).GetComponent(CameraFollow).enabled = false;
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(this.opponent.transform.GetChild(0).transform, new pc.Vec3( -4.5, 3.8, -8.2 ), 0.5), DG.Tweening.Ease.Linear);
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.ShortcutExtensions.DOLocalRotate(this.opponent.transform.GetChild(0).transform, new pc.Vec3( 30, 90, 0 ), 0.5), DG.Tweening.Ease.Linear);

                    //Camera.main.transform.DOLocalMove(new Vector3(-4.5f, 3.8f, -8.2f), 0.5f).SetEase(Ease.Linear);
                    //Camera.main.transform.DOLocalRotate(new Vector3(30, 90, 0), 0.5f).SetEase(Ease.Linear);
                    EventDispatcherExtension.PostEvent(this, EventID.OnDefeat);
                    GameUIManager.Instance.ShowPopupDefeat(2);
                }
            },
            /*FighterController.OnDefeat end.*/

            /*FighterController.CoWaitCameraWin start.*/
            CoWaitCameraWin: function () {
if ( TRACE ) { TRACE( "FighterController#CoWaitCameraWin", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(2);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.transform.GetChild(0).GetComponent(CameraFollow).enabled = false;
                                        DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(this.transform.GetChild(0).transform, new pc.Vec3( -2.5, 3, -11 ), 0.8), DG.Tweening.Ease.Linear);
                                        DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.ShortcutExtensions.DOLocalRotate(this.transform.GetChild(0).transform, new pc.Vec3( 30, 45, 0 ), 0.8), DG.Tweening.Ease.Linear);
                                        SoundController.Instance.PlaySoundByClip(SoundController.Instance.sound_bravo);

                                        EventDispatcherExtension.PostEvent(this, EventID.OnVictory);
                                        GameUIManager.Instance.ShowPopupEnding(1.5);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.obj.enabled = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FighterController.CoWaitCameraWin end.*/

            /*FighterController.CoWaitCameraLose start.*/
            CoWaitCameraLose: function () {
if ( TRACE ) { TRACE( "FighterController#CoWaitCameraLose", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(2);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FighterController.CoWaitCameraLose end.*/

            /*FighterController.AttackByTime start.*/
            AttackByTime: function () {
if ( TRACE ) { TRACE( "FighterController#AttackByTime", this ); }

                this.StartCoroutine$1(this.CoAttackByTime(0.7));
            },
            /*FighterController.AttackByTime end.*/

            /*FighterController.CoAttackByTime start.*/
            CoAttackByTime: function (delay) {
if ( TRACE ) { TRACE( "FighterController#CoAttackByTime", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    EventDispatcherExtension.PostEvent(this, EventID.OnShowFxHitted);

                                        if (this.currentHP > 0) {
                                            this.opponent.OnBeHit(this.dps);
                                        }

                                        if (this.opponent.currentHP <= 0) {
                                            UnityEngine.Debug.Log$1("last hit");
                                            UnityEngine.Time.timeScale = 0.7;
                                            UnityEngine.Time.fixedDeltaTime = 0.02 * UnityEngine.Time.timeScale;
                                            this.tapToAttackHint.SetActive(false);
                                        }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (this.opponent.currentHP > 0 && this.currentHP > 0) {
                                            this.StartCoroutine$1(this.CoAttackByTime(delay));
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FighterController.CoAttackByTime end.*/

            /*FighterController.CheckLastHit start.*/
            CheckLastHit: function () {
if ( TRACE ) { TRACE( "FighterController#CheckLastHit", this ); }

                if (this.opponent.currentHP > 0 && this.currentHP > 0 && this.dps >= this.opponent.currentHP) {
                    UnityEngine.Debug.Log$1("last hit");
                    this.tapToAttackHint.SetActive(false);
                    UnityEngine.Time.timeScale = 0.7;
                    UnityEngine.Time.fixedDeltaTime = 0.02 * UnityEngine.Time.timeScale;

                }
            },
            /*FighterController.CheckLastHit end.*/

            /*FighterController.CoTimeScale start.*/
            CoTimeScale: function (delay) {
if ( TRACE ) { TRACE( "FighterController#CoTimeScale", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    UnityEngine.Time.timeScale = 1;
                                        UnityEngine.Time.fixedDeltaTime = 0.02 * UnityEngine.Time.timeScale;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FighterController.CoTimeScale end.*/


        }
    });
    /*FighterController end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            rewardCoin: 0,
            totalCoin: 0,
            panelFighting: null,
            prefabHpBar: null,
            prefabHpLost: null,
            tfFX: null,
            fx_coin_blast: null,
            fx_coin_blast_UI: null
        },
        methods: {
            /*GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameManager#Start", this ); }

                GameManager.Instance = this;
                //SoundController.Instance.PlayMusicBgr();

                this.totalCoin = 0;
            },
            /*GameManager.Start end.*/

            /*GameManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameManager#Update", this ); }


            },
            /*GameManager.Update end.*/

            /*GameManager.ShowCoinFX start.*/
            ShowCoinFX: function (pos) {
if ( TRACE ) { TRACE( "GameManager#ShowCoinFX", this ); }

                var goFX = SCR_Pool.GetFreeObject(this.fx_coin_blast.gameObject);
                goFX.transform.parent = this.tfFX;

                goFX.transform.localPosition = pos.$clone();
                this.StartCoroutine$1(this.CoDisableObject(goFX, 2));

                this.rewardCoin = (this.rewardCoin + 10) | 0;
                this.totalCoin = (this.totalCoin + 10) | 0;
                GameUIManager.Instance.UpdateTextCoin(this.totalCoin);
            },
            /*GameManager.ShowCoinFX end.*/

            /*GameManager.CoDisableObject start.*/
            CoDisableObject: function (go, delay) {
if ( TRACE ) { TRACE( "GameManager#CoDisableObject", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    go.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.CoDisableObject end.*/

            /*GameManager.isFullRewardSkin start.*/
            isFullRewardSkin: function () {
if ( TRACE ) { TRACE( "GameManager#isFullRewardSkin", this ); }

                var isFull = true;
                //for (int i = 0; i < 11; i++)
                //{
                //    if (i != 1)
                //    {
                //        if (Database.instance.GetSkinUnlockStatusByLevel(i, 1) == 0)
                //            isFull = false;
                //    }
                //}
                return isFull;
            },
            /*GameManager.isFullRewardSkin end.*/


        }
    });
    /*GameManager end.*/

    /*GameUIManager start.*/
    Bridge.define("GameUIManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            canvasMain: null,
            panelStart: null,
            panelFighting: null,
            popupEnding: null,
            popupDefeat: null,
            textCoin: null,
            imgCoin: null,
            prefabTextShow: null,
            tfText: null,
            arIconSkinFulls: null,
            popupGetSkin: null,
            imageIconRewardSkin: null,
            buttonGetSkin: null,
            durationLevel: 0,
            installContainer: null,
            tempText: null,
            tempTimeShowText: 0,
            installClick: 0,
            ctaClick: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameUIManager#init", this ); }

                this.tempTimeShowText = 0;
                this.installClick = 0;
                this.ctaClick = 0;
            }
        },
        methods: {
            /*GameUIManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameUIManager#Awake", this ); }

                UnityEngine.Application.targetFrameRate = 60;
                UnityEngine.Input.multiTouchEnabled = false;
            },
            /*GameUIManager.Awake end.*/

            /*GameUIManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameUIManager#Start", this ); }

                GameUIManager.Instance = this;
                this.textCoin.text = "0";
            },
            /*GameUIManager.Start end.*/

            /*GameUIManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameUIManager#Update", this ); }

                if (PlayerController.Instance.isStart) {
                    this.durationLevel += UnityEngine.Time.deltaTime;
                }

                //if (Input.GetKeyDown(KeyCode.D))
                //{
                //    popupChest.SetActive(true);
                //}
            },
            /*GameUIManager.Update end.*/

            /*GameUIManager.UpdateTextCoin start.*/
            UpdateTextCoin: function (amout) {
if ( TRACE ) { TRACE( "GameUIManager#UpdateTextCoin", this ); }

                GameManager.Instance.totalCoin = amout;
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions), DG.Tweening.DOTweenModuleUI.DOText(this.textCoin, Bridge.toString(amout), 0.1, true, DG.Tweening.ScrambleMode.Numerals), DG.Tweening.Ease.Linear);
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.textCoin.transform, new pc.Vec3( 1, 1, 1 ).scale( 1.0 ), 0.05), 2, DG.Tweening.LoopType.Yoyo), DG.Tweening.Ease.Linear);
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.imgCoin.transform, new pc.Vec3( 1, 1, 1 ).scale( 1.3 ), 0.05), 2, DG.Tweening.LoopType.Yoyo), DG.Tweening.Ease.Linear);
            },
            /*GameUIManager.UpdateTextCoin end.*/

            /*GameUIManager.OnCickStartGame start.*/
            OnCickStartGame: function () {
if ( TRACE ) { TRACE( "GameUIManager#OnCickStartGame", this ); }

                //Debug.Log("start game");
                PlayerController.Instance.isStart = true;
                EventDispatcherExtension.PostEvent(this, EventID.OnCharRun);
                this.panelStart.SetActive(false);
            },
            /*GameUIManager.OnCickStartGame end.*/

            /*GameUIManager.ShowPopupEnding start.*/
            ShowPopupEnding: function (delay) {
if ( TRACE ) { TRACE( "GameUIManager#ShowPopupEnding", this ); }

                PlayerController.Instance.isStart = false;

                if (SoundController.Instance.audioMusic.isPlaying) {
                    SoundController.Instance.audioMusic.Stop();
                }

                this.StartCoroutine$1(this.CoShowPopupEnding(delay));
            },
            /*GameUIManager.ShowPopupEnding end.*/

            /*GameUIManager.CoShowPopupEnding start.*/
            CoShowPopupEnding: function (delay) {
if ( TRACE ) { TRACE( "GameUIManager#CoShowPopupEnding", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.panelFighting.SetActive(false);
                                        this.popupEnding.SetActive(true);
                                        this.installContainer.SetActive(false);

                                        Luna.Unity.LifeCycle.GameEnded();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameUIManager.CoShowPopupEnding end.*/

            /*GameUIManager.ShowPopupDefeat start.*/
            ShowPopupDefeat: function (delay) {
if ( TRACE ) { TRACE( "GameUIManager#ShowPopupDefeat", this ); }

                this.StartCoroutine$1(this.CoShowPopupDefeat(delay));
            },
            /*GameUIManager.ShowPopupDefeat end.*/

            /*GameUIManager.CoShowPopupDefeat start.*/
            CoShowPopupDefeat: function (delay) {
if ( TRACE ) { TRACE( "GameUIManager#CoShowPopupDefeat", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.panelFighting.SetActive(false);
                                        this.popupDefeat.SetActive(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameUIManager.CoShowPopupDefeat end.*/

            /*GameUIManager.ShowText start.*/
            ShowText: function (st, pos) {
if ( TRACE ) { TRACE( "GameUIManager#ShowText", this ); }

                if (UnityEngine.Time.time - this.tempTimeShowText < 0.5) {
                    return;
                }

                this.tempTimeShowText = UnityEngine.Time.time;
                this.tempText = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.prefabTextShow, this.tfText);
                this.tempText.transform.localPosition = pos.$clone();
                this.tempText.transform.GetComponent(UnityEngine.UI.Text).text = st;
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.tempText.transform, new pc.Vec3( 1.1, 1.1, 1.0 ), 0.05), DG.Tweening.Ease.InCubic), Bridge.fn.bind(this, function () {
                    DG.Tweening.ShortcutExtensions.DOScale$1(this.tempText.transform, new pc.Vec3( 1.0, 1.0, 1.0 ), 0.2);
                }));
                pos.y += 200;
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(this.tempText.transform, pos.$clone(), 1.0), DG.Tweening.Ease.InCubic), Bridge.fn.bind(this, function () {
                    this.Destroy(this.tempText, 1.0);
                }));
                DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$3(this.tempText.transform.GetComponent(UnityEngine.UI.Text), new pc.Color( 1, 1, 1, 0 ), 0.5), 0.8);
                DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$2(this.tempText.transform.GetComponent(UnityEngine.UI.Outline), new pc.Color( 1, 1, 1, 0 ), 0.5), 0.8);
            },
            /*GameUIManager.ShowText end.*/

            /*GameUIManager.ButtonDownload start.*/
            ButtonDownload: function () {
if ( TRACE ) { TRACE( "GameUIManager#ButtonDownload", this ); }

                this.installClick = (this.installClick + 1) | 0;
                Luna.Unity.Playable.InstallFullGame();
                Luna.Unity.Analytics.LogEvent$1("download_click", this.installClick);
            },
            /*GameUIManager.ButtonDownload end.*/

            /*GameUIManager.ButtonDirectToStore start.*/
            ButtonDirectToStore: function () {
if ( TRACE ) { TRACE( "GameUIManager#ButtonDirectToStore", this ); }

                this.ctaClick = (this.ctaClick + 1) | 0;
                Luna.Unity.Playable.InstallFullGame();
                Luna.Unity.Analytics.LogEvent$1("cta_click", this.ctaClick);
            },
            /*GameUIManager.ButtonDirectToStore end.*/

            /*GameUIManager.OnClickGetSkin start.*/
            OnClickGetSkin: function () {
if ( TRACE ) { TRACE( "GameUIManager#OnClickGetSkin", this ); }

                this.popupGetSkin.SetActive(false);
            },
            /*GameUIManager.OnClickGetSkin end.*/


        }
    });
    /*GameUIManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*ItemController start.*/
    Bridge.define("ItemController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            typeCalculate: 0,
            typeTimeUnit: 0,
            typeMotion: 0,
            dirMotion: null,
            totalTime: 0,
            textTime: null,
            textUnit: null,
            portalGood: null,
            portalBad: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ItemController#init", this ); }

                this.dirMotion = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*ItemController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ItemController#Start", this ); }

                //dirMotion = Vector3.right;
                //SetItemValue();
            },
            /*ItemController.Start end.*/

            /*ItemController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ItemController#Update", this ); }

                //if(typeMotion == TypeMotion.Motion)
                //{
                //    transform.Translate(dirMotion * Time.deltaTime, Space.World);
                //    if (transform.position.x <= -0.75f)
                //        dirMotion = Vector3.right;
                //    if (transform.position.x >= 0.75f)
                //        dirMotion = Vector3.left;
                //}
            },
            /*ItemController.Update end.*/

            /*ItemController.SetItemValue start.*/
            SetItemValue: function () {
if ( TRACE ) { TRACE( "ItemController#SetItemValue", this ); }

                if (this.typeCalculate === TypeCalculate.Plus || this.typeCalculate === TypeCalculate.Multiply) {
                    this.transform.GetChild(0).GetComponent(UnityEngine.MeshRenderer).material = this.portalGood;
                } else {
                    this.transform.GetChild(0).GetComponent(UnityEngine.MeshRenderer).material = this.portalBad;
                }
                this.textTime.text = (this.GetTypeCalculateSign() || "") + this.totalTime;
                this.textUnit.text = (System.Enum.toString(TypeTimeUnit, this.typeTimeUnit) || "") + "s";
                this.ConvertTime();
            },
            /*ItemController.SetItemValue end.*/

            /*ItemController.ConvertTime start.*/
            ConvertTime: function () {
if ( TRACE ) { TRACE( "ItemController#ConvertTime", this ); }

                if (this.typeTimeUnit === TypeTimeUnit.Month) {
                    this.totalTime = (Bridge.Int.div(this.totalTime, 12)) | 0;
                }
            },
            /*ItemController.ConvertTime end.*/

            /*ItemController.GetTypeCalculateSign start.*/
            GetTypeCalculateSign: function () {
if ( TRACE ) { TRACE( "ItemController#GetTypeCalculateSign", this ); }

                var sign = "";
                switch (this.typeCalculate) {
                    case TypeCalculate.Plus: 
                        sign = "+";
                        break;
                    case TypeCalculate.Minus: 
                        sign = "-";
                        break;
                    case TypeCalculate.Multiply: 
                        sign = "x";
                        break;
                    case TypeCalculate.Divide: 
                        sign = "\ufffd";
                        break;
                }
                return sign;
            },
            /*ItemController.GetTypeCalculateSign end.*/


        }
    });
    /*ItemController end.*/

    /*MapManager start.*/
    Bridge.define("MapManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            pointEnd: null,
            isMapBoss: false,
            boss: null,
            tfMulti: null,
            prefabMulti: null,
            prefabEnemy: null,
            listMultis: null,
            ground: null,
            level: null,
            arrEnemies: null,
            main: null,
            uiManager: null
        },
        methods: {
            /*MapManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "MapManager#Start", this ); }

                MapManager.Instance = this;
                this.LoadCurrentMap();

                this.ground.GetComponent(UnityEngine.MeshRenderer).material.mainTextureScale = new pc.Vec2( 1, this.ground.transform.localScale.z / 4 );
            },
            /*MapManager.Start end.*/

            /*MapManager.LoadCurrentMap start.*/
            LoadCurrentMap: function () {
if ( TRACE ) { TRACE( "MapManager#LoadCurrentMap", this ); }

                var $t;
                //int mapID = 5;

                $t = Bridge.getEnumerator(this.arrEnemies);
                try {
                    while ($t.moveNext()) {
                        var enemy = $t.Current;
                        enemy.transform.position = enemy.transform.position.$clone().sub( new pc.Vec3( 0, 0.1, 0 ) );
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
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

                this.isMapBoss = true;
                this.boss.transform.position = this.pointEnd.position.$clone().add( new pc.Vec3( 0, 0.1, 3 ) );
                this.boss.gameObject.SetActive(true);

                for (var i = 0; i < 2; i = (i + 1) | 0) {
                    var boss = UnityEngine.GameObject.FindGameObjectWithTag("Boss");
                    var goBoss = UnityEngine.Object.Instantiate(UnityEngine.GameObject, boss.transform.GetChild(1).gameObject, boss.transform);
                    goBoss.transform.localPosition = new pc.Vec3( -0.5 + i, boss.transform.GetChild(1).localPosition.y, boss.transform.GetChild(1).localPosition.z );
                    goBoss.transform.localScale = boss.transform.GetChild(1).localScale.$clone();
                }
                this.uiManager.canvasMain.SetActive(false);
                this.main.GetComponent(CameraFollow).enabled = false;
                this.main.transform.position = new pc.Vec3( 0, 2, this.boss.transform.position.z + 7 );
                DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.main.transform, new pc.Vec3( 0, 3, -4 ), 2.5), Bridge.fn.bind(this, function () {
                    this.main.GetComponent(CameraFollow).enabled = true;
                    this.uiManager.canvasMain.SetActive(true);
                })), 1);

                //InitDecor(mapID);
            },
            /*MapManager.LoadCurrentMap end.*/


        }
    });
    /*MapManager end.*/

    /*MultiController start.*/
    Bridge.define("MultiController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ground: null,
            textMulti: null,
            textMulti2: null,
            bonus: null
        },
        methods: {
            /*MultiController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "MultiController#Start", this ); }


            },
            /*MultiController.Start end.*/

            /*MultiController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MultiController#Update", this ); }


            },
            /*MultiController.Update end.*/

            /*MultiController.LoadMulti start.*/
            LoadMulti: function (id) {
if ( TRACE ) { TRACE( "MultiController#LoadMulti", this ); }

                //ground.GetComponent<MeshRenderer>().material = Resources.Load<Material>("Materials/Bonus/Bonus " + (id + 1));
                this.ground.GetComponent(UnityEngine.MeshRenderer).material = this.bonus;
                var multi = 1 + id * 0.1;
                this.textMulti.text = System.Single.format(multi, "0.0");
                this.textMulti2.text = System.Single.format(multi, "0.0");
            },
            /*MultiController.LoadMulti end.*/


        }
    });
    /*MultiController end.*/

    /*PanelFighting start.*/
    Bridge.define("PanelFighting", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            isFighting: false,
            hpBarPlayer: null,
            hpBarEnemy: null,
            skins: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PanelFighting#init", this ); }

                this.isFighting = false;
            }
        },
        methods: {
            /*PanelFighting.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PanelFighting#Start", this ); }

                PanelFighting.Instance = this;
            },
            /*PanelFighting.Start end.*/

            /*PanelFighting.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PanelFighting#Update", this ); }


            },
            /*PanelFighting.Update end.*/


        }
    });
    /*PanelFighting end.*/

    /*ParticleEffectsLibrary start.*/
    Bridge.define("ParticleEffectsLibrary", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                GlobalAccess: null
            }
        },
        fields: {
            TotalEffects: 0,
            CurrentParticleEffectIndex: 0,
            CurrentParticleEffectNum: 0,
            ParticleEffectSpawnOffsets: null,
            ParticleEffectLifetimes: null,
            ParticleEffectPrefabs: null,
            effectNameString: null,
            currentActivePEList: null,
            spawnPosition: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ParticleEffectsLibrary#init", this ); }

                this.spawnPosition = new UnityEngine.Vector3();
                this.TotalEffects = 0;
                this.CurrentParticleEffectIndex = 0;
                this.CurrentParticleEffectNum = 0;
                this.effectNameString = "";
                this.spawnPosition = pc.Vec3.ZERO.clone();
            }
        },
        methods: {
            /*ParticleEffectsLibrary.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ParticleEffectsLibrary#Awake", this ); }

                ParticleEffectsLibrary.GlobalAccess = this;

                this.currentActivePEList = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();

                this.TotalEffects = this.ParticleEffectPrefabs.length;

                this.CurrentParticleEffectNum = 1;

                // Warn About Lengths of Arrays not matching
                if (this.ParticleEffectSpawnOffsets.length !== this.TotalEffects) {
                    UnityEngine.Debug.LogError$2("ParticleEffectsLibrary-ParticleEffectSpawnOffset: Not all arrays match length, double check counts.");
                }
                if (this.ParticleEffectPrefabs.length !== this.TotalEffects) {
                    UnityEngine.Debug.LogError$2("ParticleEffectsLibrary-ParticleEffectPrefabs: Not all arrays match length, double check counts.");
                }

                // Setup Starting PE Name String
                this.effectNameString = (this.ParticleEffectPrefabs[this.CurrentParticleEffectIndex].name || "") + " (" + (Bridge.toString(this.CurrentParticleEffectNum) || "") + " of " + (Bridge.toString(this.TotalEffects) || "") + ")";
            },
            /*ParticleEffectsLibrary.Awake end.*/

            /*ParticleEffectsLibrary.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ParticleEffectsLibrary#Start", this ); }
 },
            /*ParticleEffectsLibrary.Start end.*/

            /*ParticleEffectsLibrary.GetCurrentPENameString start.*/
            GetCurrentPENameString: function () {
if ( TRACE ) { TRACE( "ParticleEffectsLibrary#GetCurrentPENameString", this ); }

                return (this.ParticleEffectPrefabs[this.CurrentParticleEffectIndex].name || "") + " (" + (Bridge.toString(this.CurrentParticleEffectNum) || "") + " of " + (Bridge.toString(this.TotalEffects) || "") + ")";
            },
            /*ParticleEffectsLibrary.GetCurrentPENameString end.*/

            /*ParticleEffectsLibrary.PreviousParticleEffect start.*/
            PreviousParticleEffect: function () {
if ( TRACE ) { TRACE( "ParticleEffectsLibrary#PreviousParticleEffect", this ); }

                // Destroy Looping Particle Effects
                if (this.ParticleEffectLifetimes[this.CurrentParticleEffectIndex] === 0) {
                    if (this.currentActivePEList.Count > 0) {
                        for (var i = 0; i < this.currentActivePEList.Count; i = (i + 1) | 0) {
                            if (UnityEngine.Component.op_Inequality(this.currentActivePEList.getItem(i), null)) {
                                UnityEngine.MonoBehaviour.Destroy(this.currentActivePEList.getItem(i).gameObject);
                            }
                        }
                        this.currentActivePEList.clear();
                    }
                }

                // Select Previous Particle Effect
                if (this.CurrentParticleEffectIndex > 0) {
                    this.CurrentParticleEffectIndex = (this.CurrentParticleEffectIndex - 1) | 0;
                } else {
                    this.CurrentParticleEffectIndex = (this.TotalEffects - 1) | 0;
                }
                this.CurrentParticleEffectNum = (this.CurrentParticleEffectIndex + 1) | 0;

                // Update PE Name String
                this.effectNameString = (this.ParticleEffectPrefabs[this.CurrentParticleEffectIndex].name || "") + " (" + (Bridge.toString(this.CurrentParticleEffectNum) || "") + " of " + (Bridge.toString(this.TotalEffects) || "") + ")";
            },
            /*ParticleEffectsLibrary.PreviousParticleEffect end.*/

            /*ParticleEffectsLibrary.NextParticleEffect start.*/
            NextParticleEffect: function () {
if ( TRACE ) { TRACE( "ParticleEffectsLibrary#NextParticleEffect", this ); }

                // Destroy Looping Particle Effects
                if (this.ParticleEffectLifetimes[this.CurrentParticleEffectIndex] === 0) {
                    if (this.currentActivePEList.Count > 0) {
                        for (var i = 0; i < this.currentActivePEList.Count; i = (i + 1) | 0) {
                            if (UnityEngine.Component.op_Inequality(this.currentActivePEList.getItem(i), null)) {
                                UnityEngine.MonoBehaviour.Destroy(this.currentActivePEList.getItem(i).gameObject);
                            }
                        }
                        this.currentActivePEList.clear();
                    }
                }

                // Select Next Particle Effect
                if (this.CurrentParticleEffectIndex < ((this.TotalEffects - 1) | 0)) {
                    this.CurrentParticleEffectIndex = (this.CurrentParticleEffectIndex + 1) | 0;
                } else {
                    this.CurrentParticleEffectIndex = 0;
                }
                this.CurrentParticleEffectNum = (this.CurrentParticleEffectIndex + 1) | 0;

                // Update PE Name String
                this.effectNameString = (this.ParticleEffectPrefabs[this.CurrentParticleEffectIndex].name || "") + " (" + (Bridge.toString(this.CurrentParticleEffectNum) || "") + " of " + (Bridge.toString(this.TotalEffects) || "") + ")";
            },
            /*ParticleEffectsLibrary.NextParticleEffect end.*/

            /*ParticleEffectsLibrary.SpawnParticleEffect start.*/
            SpawnParticleEffect: function (positionInWorldToSpawn) {
if ( TRACE ) { TRACE( "ParticleEffectsLibrary#SpawnParticleEffect", this ); }

                // Spawn Currently Selected Particle Effect
                this.spawnPosition = positionInWorldToSpawn.$clone().add( this.ParticleEffectSpawnOffsets[this.CurrentParticleEffectIndex] );
                var newParticleEffect = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.ParticleEffectPrefabs[this.CurrentParticleEffectIndex], this.spawnPosition.$clone(), this.ParticleEffectPrefabs[this.CurrentParticleEffectIndex].transform.rotation.$clone());
                newParticleEffect.name = System.String.concat("PE_", this.ParticleEffectPrefabs[this.CurrentParticleEffectIndex]);
                // Store Looping Particle Effects Systems
                if (this.ParticleEffectLifetimes[this.CurrentParticleEffectIndex] === 0) {
                    this.currentActivePEList.add(newParticleEffect.transform);
                }
                this.currentActivePEList.add(newParticleEffect.transform);
                // Destroy Particle Effect After Lifetime expired
                if (this.ParticleEffectLifetimes[this.CurrentParticleEffectIndex] !== 0) {
                    this.Destroy(newParticleEffect, this.ParticleEffectLifetimes[this.CurrentParticleEffectIndex]);
                }
            },
            /*ParticleEffectsLibrary.SpawnParticleEffect end.*/


        }
    });
    /*ParticleEffectsLibrary end.*/

    /*PEButtonScript start.*/
    Bridge.define("PEButtonScript", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IEventSystemHandler,UnityEngine.EventSystems.IPointerEnterHandler,UnityEngine.EventSystems.IPointerExitHandler],
        fields: {
            myButton: null,
            ButtonType: 0
        },
        alias: [
            "OnPointerEnter", "UnityEngine$EventSystems$IPointerEnterHandler$OnPointerEnter",
            "OnPointerExit", "UnityEngine$EventSystems$IPointerExitHandler$OnPointerExit"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PEButtonScript#init", this ); }

                this.ButtonType = ButtonTypes.NotDefined;
            }
        },
        methods: {
            /*PEButtonScript.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PEButtonScript#Start", this ); }

                this.myButton = this.gameObject.GetComponent(UnityEngine.UI.Button);
            },
            /*PEButtonScript.Start end.*/

            /*PEButtonScript.OnPointerEnter start.*/
            OnPointerEnter: function (eventData) {
if ( TRACE ) { TRACE( "PEButtonScript#OnPointerEnter", this ); }

                // Used for Tooltip
                UICanvasManager.GlobalAccess.MouseOverButton = true;
                UICanvasManager.GlobalAccess.UpdateToolTip(this.ButtonType);
            },
            /*PEButtonScript.OnPointerEnter end.*/

            /*PEButtonScript.OnPointerExit start.*/
            OnPointerExit: function (eventData) {
if ( TRACE ) { TRACE( "PEButtonScript#OnPointerExit", this ); }

                // Used for Tooltip
                UICanvasManager.GlobalAccess.MouseOverButton = false;
                UICanvasManager.GlobalAccess.ClearToolTip();
            },
            /*PEButtonScript.OnPointerExit end.*/

            /*PEButtonScript.OnButtonClicked start.*/
            OnButtonClicked: function () {
if ( TRACE ) { TRACE( "PEButtonScript#OnButtonClicked", this ); }

                // Button Click Actions
                UICanvasManager.GlobalAccess.UIButtonClick(this.ButtonType);
            },
            /*PEButtonScript.OnButtonClicked end.*/


        }
    });
    /*PEButtonScript end.*/

    /*PEDestoryTimed start.*/
    Bridge.define("PEDestoryTimed", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*PEDestoryTimed.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PEDestoryTimed#Start", this ); }


            },
            /*PEDestoryTimed.Start end.*/

            /*PEDestoryTimed.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PEDestoryTimed#Update", this ); }


            },
            /*PEDestoryTimed.Update end.*/


        }
    });
    /*PEDestoryTimed end.*/

    /*PlayerController start.*/
    Bridge.define("PlayerController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            mainCamera: null,
            currentScore: 0,
            minScore: 0,
            currentMultiID: 0,
            textScore: null,
            textMultiplier: null,
            moveSpeed: 0,
            sensitivity: 0,
            MaxDistance: 0,
            DistanceScale: 0,
            ScreenSwipeScale: 0,
            mouseLastPosX: 0,
            isPress: false,
            isTurn: false,
            isStart: false,
            isEnding: false,
            isCelebrate: false,
            borderX: 0,
            playerAnim: null,
            listCharAnim: null,
            arrCharacters: null,
            currentChar: null,
            isGetItem: false,
            currentCharID: 0,
            currentEnemySkinID: 0,
            level: 0,
            skinID: 0,
            fx_confetti: null,
            listFXtransformChar: null,
            pointEnd: null,
            panelTap: null,
            tapToAttackHint: null,
            isTap: false,
            dataCharacters: null,
            cloneChar: null,
            boss: null,
            player: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerController#init", this ); }

                this.minScore = 100;
                this.sensitivity = 0.1;
                this.isPress = false;
                this.isTurn = false;
                this.isStart = false;
                this.isEnding = false;
                this.isCelebrate = false;
                this.isGetItem = false;
                this.level = 0;
                this.skinID = 0;
                this.isTap = false;
            }
        },
        methods: {
            /*PlayerController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayerController#Start", this ); }

                PlayerController.Instance = this;
                this.minScore = 100;
                this.InitCharacter();
            },
            /*PlayerController.Start end.*/

            /*PlayerController.TapToAttackMenu start.*/
            TapToAttackMenu: function () {
if ( TRACE ) { TRACE( "PlayerController#TapToAttackMenu", this ); }

                if (this.isTap === false) {
                    Luna.Unity.LifeCycle.GameEnded();
                    this.panelTap.SetActive(true);
                    this.tapToAttackHint.SetActive(true);
                    UnityEngine.Time.timeScale = 0.0;
                    this.isTap = true;
                }
            },
            /*PlayerController.TapToAttackMenu end.*/

            /*PlayerController.ClickToAttack start.*/
            ClickToAttack: function () {
if ( TRACE ) { TRACE( "PlayerController#ClickToAttack", this ); }

                UnityEngine.Time.timeScale = 1.0;
                this.panelTap.SetActive(false);
            },
            /*PlayerController.ClickToAttack end.*/

            /*PlayerController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayerController#Update", this ); }

                if (this.isStart) {
                    if (this.transform.position.z < MapManager.Instance.pointEnd.position.z) {
                        this.transform.Translate$1(new pc.Vec3( 0, 0, 1 ).scale( UnityEngine.Time.deltaTime ).scale( this.moveSpeed ), UnityEngine.Space.World);
                    } else {
                        if (!this.isEnding) {
                            this.ShowEnding();
                        }
                    }
                }

                if (!this.isEnding) {
                    //if (!IsMouseOverUI())
                    //{
                    if (UnityEngine.Input.GetMouseButtonDown(0)) {
                        this.mouseLastPosX = UnityEngine.Input.mousePosition.x;
                        this.isPress = true;
                    }
                    if (UnityEngine.Input.touchCount > 0 && UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Ended || UnityEngine.Input.GetMouseButton(0)) {
                        if (this.isPress === true) {
                            if (!this.isTurn) {
                                var tempPosX = UnityEngine.Input.mousePosition.x;
                                var direction = new pc.Vec3( this.sensitivity * ((tempPosX - this.mouseLastPosX) / this.ScreenSwipeScale), 0, 0 );
                                this.transform.Translate$1(direction);

                                if (!pc.Vec3.equals( direction.clone().normalize(), pc.Vec3.ZERO.clone() )) {
                                    if (direction.x > 0) {
                                        DG.Tweening.ShortcutExtensions.DORotate(this.transform, new pc.Vec3( 0, 15, 0 ), 0.2);
                                    } else {
                                        DG.Tweening.ShortcutExtensions.DORotate(this.transform, new pc.Vec3( 0, -15, 0 ), 0.2);
                                    }
                                } else {
                                    DG.Tweening.ShortcutExtensions.DORotate(this.transform, pc.Vec3.ZERO.clone(), 0.2);
                                }

                                if (this.transform.position.x < -this.borderX) {
                                    this.transform.position = new pc.Vec3( -this.borderX, this.transform.position.y, this.transform.position.z );
                                }
                                if (this.transform.position.x > this.borderX) {
                                    this.transform.position = new pc.Vec3( this.borderX, this.transform.position.y, this.transform.position.z );
                                }
                                this.mouseLastPosX = tempPosX;
                            }
                        }
                    }

                    if (UnityEngine.Input.GetMouseButtonUp(0)) {
                        DG.Tweening.ShortcutExtensions.DORotate(this.transform, pc.Vec3.ZERO.clone(), 0.2);
                        this.isPress = false;
                    }
                    //}
                }

                if (this.isEnding) {
                    this.currentScore = (this.currentScore - (Bridge.Int.mul(Bridge.Int.clip32(UnityEngine.Time.deltaTime), 100))) | 0;
                    this.textScore.text = Bridge.toString(this.currentScore);
                }
            },
            /*PlayerController.Update end.*/

            /*PlayerController.UpdateStartScore start.*/
            UpdateStartScore: function () {
if ( TRACE ) { TRACE( "PlayerController#UpdateStartScore", this ); }

                this.currentScore = 100;
                this.textScore.text = Bridge.toString(this.currentScore);
            },
            /*PlayerController.UpdateStartScore end.*/

            /*PlayerController.InitCharacter start.*/
            InitCharacter: function () {
if ( TRACE ) { TRACE( "PlayerController#InitCharacter", this ); }

                this.borderX = 1.3;
                this.UpdateStartScore();
                EventDispatcherExtension.PostEvent(this, EventID.OnLoadSkin);
                this.currentChar = this.arrCharacters[0];

                this.playerAnim = this.transform.GetChild(0).GetComponent(UnityEngine.Animator);
                this.DistanceScale = this.MaxDistance / this.sensitivity;
                this.ScreenSwipeScale = (((Bridge.Int.div(UnityEngine.Screen.width, 3)) | 0)) / this.DistanceScale;
            },
            /*PlayerController.InitCharacter end.*/

            /*PlayerController.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "PlayerController#OnTriggerEnter", this ); }

                if (!this.isGetItem && other.CompareTag("Item")) {
                    this.GetItem(other.GetComponent(ItemController));
                    this.isGetItem = true;
                    this.StartCoroutine$1(this.CoWaitGetItem(0.5, other.gameObject));
                }

                if (!this.isGetItem && other.CompareTag("ItemX3")) {
                    this.GetX3Item();
                    this.isGetItem = true;
                    this.StartCoroutine$1(this.CoWaitGetItem(0.5, other.gameObject));
                }
            },
            /*PlayerController.OnTriggerEnter end.*/

            /*PlayerController.CoWaitGetItem start.*/
            CoWaitGetItem: function (delay, obj) {
if ( TRACE ) { TRACE( "PlayerController#CoWaitGetItem", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.isGetItem = false;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    UnityEngine.MonoBehaviour.Destroy(obj);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PlayerController.CoWaitGetItem end.*/

            /*PlayerController.GetItem start.*/
            GetItem: function (item) {
if ( TRACE ) { TRACE( "PlayerController#GetItem", this ); }

                var color = new pc.Color( 0, 1, 0, 1 );
                var multiply = 1;
                switch (item.typeCalculate) {
                    case TypeCalculate.Plus: 
                        this.currentScore = (this.currentScore + item.totalTime) | 0;
                        color = new pc.Color( 0, 1, 0, 1 );
                        multiply = 1.4;
                        break;
                    case TypeCalculate.Minus: 
                        this.currentScore = (this.currentScore - item.totalTime) | 0;
                        color = new pc.Color( 1, 0, 0, 1 );
                        multiply = 1;
                        break;
                    case TypeCalculate.Multiply: 
                        this.currentScore = Bridge.Int.mul(this.currentScore, item.totalTime);
                        color = new pc.Color( 0, 1, 0, 1 );
                        multiply = 1.4;
                        break;
                    case TypeCalculate.Divide: 
                        this.currentScore = (Bridge.Int.div(this.currentScore, item.totalTime)) | 0;
                        color = new pc.Color( 1, 0, 0, 1 );
                        multiply = 1;
                        break;
                }
                if (this.currentScore < this.minScore) {
                    this.currentScore = this.minScore;
                }

                this.UpdateTextScore(color.$clone(), multiply);
                this.LoadSkinByScore();
            },
            /*PlayerController.GetItem end.*/

            /*PlayerController.UpdateTextScore start.*/
            UpdateTextScore: function (color, multiply) {
if ( TRACE ) { TRACE( "PlayerController#UpdateTextScore", this ); }

                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions), DG.Tweening.DOTweenModuleUI.DOText(this.textScore, Bridge.toString(this.currentScore), 0.5, true, DG.Tweening.ScrambleMode.Numerals), DG.Tweening.Ease.Linear);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$3(this.textScore, color.$clone(), 0.3), Bridge.fn.bind(this, function () {
                    DG.Tweening.DOTweenModuleUI.DOColor$3(this.textScore, new pc.Color( 1, 1, 1, 1 ), 0.2);
                }));
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.textScore.transform, new pc.Vec3( 1, 1, 1 ).scale( multiply ), 0.3), Bridge.fn.bind(this, function () {
                    DG.Tweening.ShortcutExtensions.DOScale$1(this.textScore.transform, new pc.Vec3( 1, 1, 1 ).scale( 1 ), 0.3);
                }));
            },
            /*PlayerController.UpdateTextScore end.*/

            /*PlayerController.LoadSkinByScore start.*/
            LoadSkinByScore: function () {
if ( TRACE ) { TRACE( "PlayerController#LoadSkinByScore", this ); }

                var skinID = 0;

                for (var i = (this.dataCharacters.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (this.currentScore >= this.dataCharacters.getItem(i).time) {
                        skinID = i;
                        break;
                    }
                }

                if (this.currentCharID !== skinID) {
                    if (this.isStart) {

                    }
                    this.currentCharID = skinID;
                    EventDispatcherExtension.PostEvent(this, EventID.OnCharRun);
                    EventDispatcherExtension.PostEvent(this, EventID.OnEnemyLoadSkin);

                    EventDispatcherExtension.PostEvent(this, EventID.OnLoadSkin);
                }
            },
            /*PlayerController.LoadSkinByScore end.*/

            /*PlayerController.GetX3Item start.*/
            GetX3Item: function () {
if ( TRACE ) { TRACE( "PlayerController#GetX3Item", this ); }

                for (var i = 0; i < 2; i = (i + 1) | 0) {
                    var goChar = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.cloneChar, this.transform);
                    goChar.transform.localPosition = new pc.Vec3( -0.5 + i, 0, 0 );
                    goChar.transform.localScale = pc.Vec3.ZERO.clone();
                    DG.Tweening.ShortcutExtensions.DOScale$1(goChar.transform, this.transform.GetChild(0).localScale.$clone(), 0.3);

                    EventDispatcherExtension.PostEvent(this, EventID.OnLoadSkin);
                }
                EventDispatcherExtension.PostEvent(this, EventID.OnCharRun);

                this.borderX = 0.8;
            },
            /*PlayerController.GetX3Item end.*/

            /*PlayerController.MultiID start.*/
            MultiID: function () {
if ( TRACE ) { TRACE( "PlayerController#MultiID", this ); }

                //List<DataMultiplier> dataMultipliers = DataManager.Instance.dataMultiplier;
                var multiID = 0;
                //for (int i = dataMultipliers.Count - 1; i >= 0; i--)
                //{
                //    if(currentScore >= dataMultipliers[i].time)
                //    {
                //        multiID = i;
                //        break;
                //    }
                //}
                return multiID;
            },
            /*PlayerController.MultiID end.*/

            /*PlayerController.GetTimeMoveMulti start.*/
            GetTimeMoveMulti: function (multiID) {
if ( TRACE ) { TRACE( "PlayerController#GetTimeMoveMulti", this ); }

                return (((multiID + 1) | 0)) * 0.7;
            },
            /*PlayerController.GetTimeMoveMulti end.*/

            /*PlayerController.ShowEnding start.*/
            ShowEnding: function () {
if ( TRACE ) { TRACE( "PlayerController#ShowEnding", this ); }

                this.isEnding = true;

                if (MapManager.Instance.isMapBoss) {
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.textScore.transform.parent, pc.Vec3.ZERO.clone(), 0.2), DG.Tweening.Ease.Linear);
                    //GameUIManager.Instance.goLevelProgress.SetActive(false);
                    DG.Tweening.ShortcutExtensions.DORotate(this.transform, pc.Vec3.ZERO.clone(), 0.2);
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, new pc.Vec3( 0, 0.1, MapManager.Instance.boss.transform.GetChild(1).position.z - 1.7 ), 1), DG.Tweening.Ease.Linear), Bridge.fn.bind(this, function () {
                        this.FightingBoss();
                    }));
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
            },
            /*PlayerController.ShowEnding end.*/

            /*PlayerController.ChangeSpeed start.*/
            ChangeSpeed: function (v_start, v_end, duration) {
if ( TRACE ) { TRACE( "PlayerController#ChangeSpeed", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this.currentScore = Bridge.Int.clip32(pc.math.lerp(v_start, v_end, elapsed / duration));
                                        elapsed += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.currentScore = v_end;
                                        this.textScore.text = Bridge.toString(this.currentScore);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PlayerController.ChangeSpeed end.*/

            /*PlayerController.ShowCelebration start.*/
            ShowCelebration: function () {
if ( TRACE ) { TRACE( "PlayerController#ShowCelebration", this ); }

                SoundController.Instance.PlaySoundByClip(SoundController.Instance.sound_bravo);

                this.isCelebrate = true;
                UnityEngine.Time.timeScale = 1;
                UnityEngine.Time.fixedDeltaTime = 0.02 * UnityEngine.Time.timeScale;

                EventDispatcherExtension.PostEvent(this, EventID.OnVictory);
                this.fx_confetti.transform.position = new pc.Vec3( 0, 5, this.transform.position.z );
                this.fx_confetti.Play();
                GameUIManager.Instance.ShowPopupEnding(1.5);
            },
            /*PlayerController.ShowCelebration end.*/

            /*PlayerController.FightingBoss start.*/
            FightingBoss: function () {
if ( TRACE ) { TRACE( "PlayerController#FightingBoss", this ); }

                this.isEnding = true;

                UnityEngine.Debug.Log$1("FightingBoss");

                UnityEngine.Time.timeScale = 1;
                this.boss.opponent = this.player;
                this.boss.totalHP = this.dataCharacters.getItem(this.boss.fighterID).hp;
                this.boss.dps = this.dataCharacters.getItem(this.boss.fighterID).dps;
                this.boss.currentHP = this.boss.totalHP;
                this.boss.hpBar = PanelFighting.Instance.hpBarEnemy;
                this.boss.hpBar.transform.GetChild(0).GetComponent(UnityEngine.UI.Image).fillAmount = 1;
                this.boss.isBoss = true;

                this.player.opponent = this.boss;
                this.player.totalHP = this.dataCharacters.getItem(this.currentCharID).hp;
                this.player.dps = this.dataCharacters.getItem(this.currentCharID).dps;
                this.player.currentHP = this.player.totalHP;
                this.player.hpBar = PanelFighting.Instance.hpBarPlayer;
                this.player.hpBar.transform.GetChild(0).GetComponent(UnityEngine.UI.Image).fillAmount = 1;
                this.player.isBoss = false;

                this.mainCamera.GetComponent(CameraFollow).enabled = false;
                DG.Tweening.ShortcutExtensions.DOMove(this.mainCamera.transform, this.boss.transform.GetChild(0).position.$clone(), 1);
                this.TapToAttackMenu();
                DG.Tweening.ShortcutExtensions.DORotate(this.mainCamera.transform, this.boss.transform.GetChild(0).eulerAngles.$clone(), 1);
                GameUIManager.Instance.panelFighting.SetActive(true);
                this.StartCoroutine$1(this.CoStartFight(0));
            },
            /*PlayerController.FightingBoss end.*/

            /*PlayerController.CoStartFight start.*/
            CoStartFight: function (delay) {
if ( TRACE ) { TRACE( "PlayerController#CoStartFight", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    EventDispatcherExtension.PostEvent(this, EventID.OnAttackBoss);
                                        EventDispatcherExtension.PostEvent(this, EventID.OnFightBegin);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PlayerController.CoStartFight end.*/

            /*PlayerController.IsMouseOverUI start.*/
            IsMouseOverUI: function () {
if ( TRACE ) { TRACE( "PlayerController#IsMouseOverUI", this ); }

                if (UnityEngine.Application.platform === UnityEngine.RuntimePlatform.WindowsEditor || UnityEngine.Application.platform === UnityEngine.RuntimePlatform.OSXEditor) {
                    return UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject();
                } else {
                    //return EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId);
                    return this.IsPointerOverUIObject();
                }
            },
            /*PlayerController.IsMouseOverUI end.*/

            /*PlayerController.IsPointerOverUIObject start.*/
            IsPointerOverUIObject: function () {
if ( TRACE ) { TRACE( "PlayerController#IsPointerOverUIObject", this ); }

                var eventDataCurrentPosition = new UnityEngine.EventSystems.PointerEventData(UnityEngine.EventSystems.EventSystem.current);
                eventDataCurrentPosition.position = new pc.Vec2( UnityEngine.Input.mousePosition.x, UnityEngine.Input.mousePosition.y );
                var results = new (System.Collections.Generic.List$1(UnityEngine.EventSystems.RaycastResult)).ctor();
                UnityEngine.EventSystems.EventSystem.current.RaycastAll(eventDataCurrentPosition, results);
                return results.Count > 0;
            },
            /*PlayerController.IsPointerOverUIObject end.*/


        }
    });
    /*PlayerController end.*/

    /*PlayerController+DataCharacter start.*/
    Bridge.define("PlayerController.DataCharacter", {
        $kind: "nested class",
        fields: {
            id: 0,
            time: 0,
            hp: 0,
            dps: 0,
            dataCharacter: null
        }
    });
    /*PlayerController+DataCharacter end.*/

    /*PoolEntry start.*/
    Bridge.define("PoolEntry", {
        fields: {
            prefab: null,
            list: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PoolEntry#init", this ); }

                this.list = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
            },
            ctor: function (pfb) {
if ( TRACE ) { TRACE( "PoolEntry#ctor", this ); }

                this.$initialize();
                this.prefab = pfb;
            }
        }
    });
    /*PoolEntry end.*/

    /*PopupEnding start.*/
    Bridge.define("PopupEnding", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            buttonNextLevel: null,
            textTotalReward: null,
            textDefaultReward: null,
            rectTransformNeedle: null,
            animCurveNeedle: null,
            tweenNeedleRotate: null,
            totalReward: 0,
            goSkinReward: null,
            fillSkinReward: null,
            textFillReward: null,
            manager: null,
            ctaClick: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PopupEnding#init", this ); }

                this.ctaClick = 0;
            }
        },
        methods: {
            /*PopupEnding.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PopupEnding#Start", this ); }

                PopupEnding.Instance = this;
                this.buttonNextLevel.onClick.AddListener(Bridge.fn.cacheBind(this, this.ButtonDirectToStore));

                this.buttonNextLevel.transform.localScale = pc.Vec3.ZERO.clone();
                DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.buttonNextLevel.transform, new pc.Vec3( 1, 1, 1 ), 0.5), 1.0);
                //float multi = 1 + PlayerController.Instance.currentMultiID * 0.1f;
                //totalReward = Mathf.RoundToInt((GameManager.Instance.rewardCoin + 50) * multi *
                //    DataManager.Instance.dataUpgrades[Database.instance.database.currentUpgradeIncome].income);
                this.totalReward = Math.round(((this.manager.rewardCoin + 50) | 0));
                this.textDefaultReward.text = Bridge.toString(this.totalReward);

                Luna.Unity.LifeCycle.GameEnded();
                Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.EndCardShown);
                //Open();

            },
            /*PopupEnding.Start end.*/

            /*PopupEnding.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PopupEnding#Update", this ); }

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
            },
            /*PopupEnding.Update end.*/

            /*PopupEnding.OnClickNextLevel start.*/
            OnClickNextLevel: function () {
if ( TRACE ) { TRACE( "PopupEnding#OnClickNextLevel", this ); }

                if (this.tweenNeedleRotate != null && DG.Tweening.TweenExtensions.IsActive(this.tweenNeedleRotate)) {
                    DG.Tweening.TweenExtensions.Kill(this.tweenNeedleRotate);
                }

                this.buttonNextLevel.interactable = false;
            },
            /*PopupEnding.OnClickNextLevel end.*/

            /*PopupEnding.Open start.*/
            Open: function () {
if ( TRACE ) { TRACE( "PopupEnding#Open", this ); }

                this.gameObject.SetActive(true);
                this.goSkinReward.SetActive(false);
                //goSkinReward.SetActive(!GameManager.Instance.isFullRewardSkin());
                //if (!GameManager.Instance.isFullRewardSkin())
                //    ShowSkinReward();

                this.rectTransformNeedle.localEulerAngles = pc.Vec3.ZERO.clone();
                this.tweenNeedleRotate = DG.Tweening.TweenSettingsExtensions.SetLoops(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetEase(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.ShortcutExtensions.DORotate(this.rectTransformNeedle, new pc.Vec3( 0.0, 0.0, 90.0 ), 1.7), this.animCurveNeedle), -1);
            },
            /*PopupEnding.Open end.*/

            /*PopupEnding.Close start.*/
            Close: function () {
if ( TRACE ) { TRACE( "PopupEnding#Close", this ); }

                this.gameObject.SetActive(false);

                if (this.tweenNeedleRotate != null && DG.Tweening.TweenExtensions.IsActive(this.tweenNeedleRotate)) {
                    DG.Tweening.TweenExtensions.Kill(this.tweenNeedleRotate);
                }
            },
            /*PopupEnding.Close end.*/

            /*PopupEnding.ShowSkinReward start.*/
            ShowSkinReward: function () {
if ( TRACE ) { TRACE( "PopupEnding#ShowSkinReward", this ); }

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
            },
            /*PopupEnding.ShowSkinReward end.*/

            /*PopupEnding.ButtonDirectToStore start.*/
            ButtonDirectToStore: function () {
if ( TRACE ) { TRACE( "PopupEnding#ButtonDirectToStore", this ); }

                this.ctaClick = (this.ctaClick + 1) | 0;
                Luna.Unity.Playable.InstallFullGame();
                Luna.Unity.Analytics.LogEvent$1("cta_click", this.ctaClick);
            },
            /*PopupEnding.ButtonDirectToStore end.*/


        }
    });
    /*PopupEnding end.*/

    /*SCR_Pool start.*/
    Bridge.define("SCR_Pool", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                entries: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "SCR_Pool#init", this ); }

                    this.entries = new (System.Collections.Generic.List$1(PoolEntry)).ctor();
                }
            },
            methods: {
                /*SCR_Pool.GetFreeObjectFromEntry:static start.*/
                GetFreeObjectFromEntry: function (entry, prefab) {
if ( TRACE ) { TRACE( "SCR_Pool#GetFreeObjectFromEntry", this ); }

                    var $t;
                    var result = null;
                    $t = Bridge.getEnumerator(entry.list);
                    try {
                        while ($t.moveNext()) {
                            var gameObject = $t.Current;
                            if (!gameObject.activeSelf) {
                                result = gameObject;
                                break;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    if (UnityEngine.GameObject.op_Equality(result, null)) {
                        result = UnityEngine.Object.Instantiate(UnityEngine.GameObject, prefab);
                        entry.list.add(result);
                    }

                    result.SetActive(true);

                    return result;
                },
                /*SCR_Pool.GetFreeObjectFromEntry:static end.*/

                /*SCR_Pool.GetFreeObject:static start.*/
                GetFreeObject: function (prefab) {
if ( TRACE ) { TRACE( "SCR_Pool#GetFreeObject", this ); }

                    var $t;
                    var result = null;
                    $t = Bridge.getEnumerator(SCR_Pool.entries);
                    try {
                        while ($t.moveNext()) {
                            var entry = $t.Current;
                            if (UnityEngine.GameObject.op_Equality(entry.prefab, prefab)) {
                                result = entry;
                                break;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    if (result == null) {
                        result = new PoolEntry(prefab);
                        SCR_Pool.entries.add(result);
                    }

                    return SCR_Pool.GetFreeObjectFromEntry(result, prefab);
                },
                /*SCR_Pool.GetFreeObject:static end.*/

                /*SCR_Pool.GetObjectList:static start.*/
                GetObjectList: function (prefab) {
if ( TRACE ) { TRACE( "SCR_Pool#GetObjectList", this ); }

                    var $t;
                    var result = null;
                    $t = Bridge.getEnumerator(SCR_Pool.entries);
                    try {
                        while ($t.moveNext()) {
                            var entry = $t.Current;
                            if (UnityEngine.GameObject.op_Equality(entry.prefab, prefab)) {
                                result = entry;
                                break;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    if (result == null) {
                        result = new PoolEntry(prefab);
                        SCR_Pool.entries.add(result);
                    }

                    return result.list;
                },
                /*SCR_Pool.GetObjectList:static end.*/

                /*SCR_Pool.DeactivateAllObject:static start.*/
                DeactivateAllObject: function () {
if ( TRACE ) { TRACE( "SCR_Pool#DeactivateAllObject", this ); }

                    var $t, $t1;
                    $t = Bridge.getEnumerator(SCR_Pool.entries);
                    try {
                        while ($t.moveNext()) {
                            var entry = $t.Current;
                            $t1 = Bridge.getEnumerator(entry.list);
                            try {
                                while ($t1.moveNext()) {
                                    var gameObject = $t1.Current;
                                    gameObject.transform.SetParent(null);
                                    gameObject.SetActive(false);
                                }
                            } finally {
                                if (Bridge.is($t1, System.IDisposable)) {
                                    $t1.System$IDisposable$Dispose();
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                },
                /*SCR_Pool.DeactivateAllObject:static end.*/

                /*SCR_Pool.Flush:static start.*/
                Flush: function () {
if ( TRACE ) { TRACE( "SCR_Pool#Flush", this ); }

                    SCR_Pool.entries.clear();
                },
                /*SCR_Pool.Flush:static end.*/


            }
        }
    });
    /*SCR_Pool end.*/

    /*SoundController start.*/
    Bridge.define("SoundController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            audioMusic: null,
            audioSound: null,
            sound_melee: null,
            sound_bravo: null,
            sound_upgrade: null,
            sound_click_button: null,
            volumeMusic: 0,
            delayVolume: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SoundController#init", this ); }

                this.volumeMusic = 1;
            }
        },
        methods: {
            /*SoundController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SoundController#Start", this ); }

                SoundController.Instance = this;
                this.audioMusic.volume = 0;
                this.PlayMusicBgr();
            },
            /*SoundController.Start end.*/

            /*SoundController.PlayMusicBgr start.*/
            PlayMusicBgr: function () {
if ( TRACE ) { TRACE( "SoundController#PlayMusicBgr", this ); }

                if (this.delayVolume != null) {
                    this.StopCoroutine(this.delayVolume);
                }
                this.delayVolume = this.DelayLoadVolumeMusic();
                this.StartCoroutine$1(this.delayVolume);

                if (!this.audioMusic.isPlaying) {
                    this.audioMusic.Play();
                }
            },
            /*SoundController.PlayMusicBgr end.*/

            /*SoundController.DelayLoadVolumeMusic start.*/
            DelayLoadVolumeMusic: function () {
if ( TRACE ) { TRACE( "SoundController#DelayLoadVolumeMusic", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.02);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (UnityEngine.PlayerPrefs.GetInt("musicState") === 0) {
                                            if (this.audioMusic.volume < this.volumeMusic) {
                                                this.audioMusic.volume += 0.1;
                                                this.delayVolume = this.DelayLoadVolumeMusic();
                                                this.StartCoroutine$1(this.delayVolume);
                                            }
                                        } else {
                                            if (this.audioMusic.volume > 0) {
                                                this.audioMusic.volume -= 0.1;
                                                this.delayVolume = this.DelayLoadVolumeMusic();
                                                this.StartCoroutine$1(this.delayVolume);
                                            }
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SoundController.DelayLoadVolumeMusic end.*/

            /*SoundController.PlaySoundByClip start.*/
            PlaySoundByClip: function (audio) {
if ( TRACE ) { TRACE( "SoundController#PlaySoundByClip", this ); }

                if (UnityEngine.PlayerPrefs.GetInt("soundState") === 0) {
                    this.audioSound.volume = 1;
                } else {
                    this.audioSound.volume = 0;
                }
                this.audioSound.clip = audio;
                this.audioSound.Play();
            },
            /*SoundController.PlaySoundByClip end.*/


        }
    });
    /*SoundController end.*/

    /*TransformExtend start.*/
    Bridge.define("TransformExtend", {
        statics: {
            methods: {
                /*TransformExtend.GetChilds:static start.*/
                GetChilds: function (transform) {
if ( TRACE ) { TRACE( "TransformExtend#GetChilds", this ); }

                    var list = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                    var num = transform.childCount;
                    for (var i = 0; i < num; i = (i + 1) | 0) {
                        list.add(transform.GetChild(i));
                    }
                    return list;
                },
                /*TransformExtend.GetChilds:static end.*/


            }
        }
    });
    /*TransformExtend end.*/

    /*TypeCalculate start.*/
    Bridge.define("TypeCalculate", {
        $kind: "enum",
        statics: {
            fields: {
                Plus: 0,
                Minus: 1,
                Multiply: 2,
                Divide: 3
            }
        }
    });
    /*TypeCalculate end.*/

    /*TypeMotion start.*/
    Bridge.define("TypeMotion", {
        $kind: "enum",
        statics: {
            fields: {
                Static: 0,
                Motion: 1
            }
        }
    });
    /*TypeMotion end.*/

    /*TypeTimeUnit start.*/
    Bridge.define("TypeTimeUnit", {
        $kind: "enum",
        statics: {
            fields: {
                Month: 0,
                Year: 1
            }
        }
    });
    /*TypeTimeUnit end.*/

    /*UICanvasManager start.*/
    Bridge.define("UICanvasManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                GlobalAccess: null
            }
        },
        fields: {
            MouseOverButton: false,
            PENameText: null,
            ToolTipText: null,
            rayHit: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UICanvasManager#init", this ); }

                this.rayHit = new UnityEngine.RaycastHit();
                this.MouseOverButton = false;
            }
        },
        methods: {
            /*UICanvasManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "UICanvasManager#Awake", this ); }

                UICanvasManager.GlobalAccess = this;
            },
            /*UICanvasManager.Awake end.*/

            /*UICanvasManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "UICanvasManager#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.PENameText, null)) {
                    this.PENameText.text = ParticleEffectsLibrary.GlobalAccess.GetCurrentPENameString();
                }
            },
            /*UICanvasManager.Start end.*/

            /*UICanvasManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "UICanvasManager#Update", this ); }


                // Mouse Click - Check if mouse over button to prevent spawning particle effects while hovering or using UI buttons.
                if (!this.MouseOverButton) {
                    // Left Button Click
                    if (UnityEngine.Input.GetMouseButtonUp(0)) {
                        // Spawn Currently Selected Particle System
                        this.SpawnCurrentParticleEffect();
                    }
                }

                if (UnityEngine.Input.GetKeyUp(UnityEngine.KeyCode.A)) {
                    this.SelectPreviousPE();
                }
                if (UnityEngine.Input.GetKeyUp(UnityEngine.KeyCode.D)) {
                    this.SelectNextPE();
                }
            },
            /*UICanvasManager.Update end.*/

            /*UICanvasManager.UpdateToolTip start.*/
            UpdateToolTip: function (toolTipType) {
if ( TRACE ) { TRACE( "UICanvasManager#UpdateToolTip", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.ToolTipText, null)) {
                    if (toolTipType === ButtonTypes.Previous) {
                        this.ToolTipText.text = "Select Previous Particle Effect";
                    } else if (toolTipType === ButtonTypes.Next) {
                        this.ToolTipText.text = "Select Next Particle Effect";
                    }
                }
            },
            /*UICanvasManager.UpdateToolTip end.*/

            /*UICanvasManager.ClearToolTip start.*/
            ClearToolTip: function () {
if ( TRACE ) { TRACE( "UICanvasManager#ClearToolTip", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.ToolTipText, null)) {
                    this.ToolTipText.text = "";
                }
            },
            /*UICanvasManager.ClearToolTip end.*/

            /*UICanvasManager.SelectPreviousPE start.*/
            SelectPreviousPE: function () {
if ( TRACE ) { TRACE( "UICanvasManager#SelectPreviousPE", this ); }

                // Previous
                ParticleEffectsLibrary.GlobalAccess.PreviousParticleEffect();
                if (UnityEngine.MonoBehaviour.op_Inequality(this.PENameText, null)) {
                    this.PENameText.text = ParticleEffectsLibrary.GlobalAccess.GetCurrentPENameString();
                }
            },
            /*UICanvasManager.SelectPreviousPE end.*/

            /*UICanvasManager.SelectNextPE start.*/
            SelectNextPE: function () {
if ( TRACE ) { TRACE( "UICanvasManager#SelectNextPE", this ); }

                // Next
                ParticleEffectsLibrary.GlobalAccess.NextParticleEffect();
                if (UnityEngine.MonoBehaviour.op_Inequality(this.PENameText, null)) {
                    this.PENameText.text = ParticleEffectsLibrary.GlobalAccess.GetCurrentPENameString();
                }
            },
            /*UICanvasManager.SelectNextPE end.*/

            /*UICanvasManager.SpawnCurrentParticleEffect start.*/
            SpawnCurrentParticleEffect: function () {
if ( TRACE ) { TRACE( "UICanvasManager#SpawnCurrentParticleEffect", this ); }

                // Spawn Particle Effect
                var mouseRay = UnityEngine.Camera.main.ScreenPointToRay(UnityEngine.Input.mousePosition.$clone());
                if (UnityEngine.Physics.Raycast$1(mouseRay, Bridge.ref(this, "rayHit"))) {
                    ParticleEffectsLibrary.GlobalAccess.SpawnParticleEffect(this.rayHit.point.$clone());
                }
            },
            /*UICanvasManager.SpawnCurrentParticleEffect end.*/

            /*UICanvasManager.UIButtonClick start.*/
            /**
             * User interfaces the button click.
             *
             * @instance
             * @public
             * @this UICanvasManager
             * @memberof UICanvasManager
             * @param   {ButtonTypes}    buttonTypeClicked    Button type clicked.
             * @return  {void}
             */
            UIButtonClick: function (buttonTypeClicked) {
if ( TRACE ) { TRACE( "UICanvasManager#UIButtonClick", this ); }

                switch (buttonTypeClicked) {
                    case ButtonTypes.Previous: 
                        // Select Previous Prefab
                        this.SelectPreviousPE();
                        break;
                    case ButtonTypes.Next: 
                        // Select Next Prefab
                        this.SelectNextPE();
                        break;
                    default: 
                        // Nothing
                        break;
                }
            },
            /*UICanvasManager.UIButtonClick end.*/


        }
    });
    /*UICanvasManager end.*/

    /*BossController start.*/
    Bridge.define("BossController", {
        inherits: [CharacterController],
        methods: {
            /*BossController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BossController#Start", this ); }

                var $t;
                this.anim = this.GetComponent(UnityEngine.Animator);

                this.listWeaponRight = TransformExtend.GetChilds(this.weaponsRight);
                this.listWeaponLeft = TransformExtend.GetChilds(this.weaponsLeft);

                this.allRig = this.GetComponentsInChildren(UnityEngine.Rigidbody);
                $t = Bridge.getEnumerator(this.allRig);
                try {
                    while ($t.moveNext()) {
                        var rig = $t.Current;
                        rig.isKinematic = true;
                        if (UnityEngine.Component.op_Inequality(rig.gameObject.GetComponent(UnityEngine.BoxCollider), null)) {
                            rig.gameObject.GetComponent(UnityEngine.BoxCollider).isTrigger = true;
                        }
                        if (UnityEngine.Component.op_Inequality(rig.gameObject.GetComponent(UnityEngine.CapsuleCollider), null)) {
                            rig.gameObject.GetComponent(UnityEngine.CapsuleCollider).isTrigger = true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.OnLoadSkinBoss();
            },
            /*BossController.Start end.*/

            /*BossController.Update$1 start.*/
            Update$1: function () {
if ( TRACE ) { TRACE( "BossController#Update$1", this ); }


            },
            /*BossController.Update$1 end.*/

            /*BossController.OnEnable$1 start.*/
            OnEnable$1: function () {
if ( TRACE ) { TRACE( "BossController#OnEnable$1", this ); }

                EventDispatcherExtension.RegisterListener(this, EventID.OnFightDefeat, Bridge.fn.cacheBind(this, this.OnBossDefeat));
                EventDispatcherExtension.RegisterListener(this, EventID.OnLoadSkin, Bridge.fn.cacheBind(this, this.OnLoadSkinBoss$1));
                EventDispatcherExtension.RegisterListener(this, EventID.OnAttackBoss, Bridge.fn.cacheBind(this, this.OnBossAttack));

            },
            /*BossController.OnEnable$1 end.*/

            /*BossController.OnDisable$1 start.*/
            OnDisable$1: function () {
if ( TRACE ) { TRACE( "BossController#OnDisable$1", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(LazySingleton$1(EventDispatcher).Instance, null)) {
                    LazySingleton$1(EventDispatcher).Instance.RemoveListener(EventID.OnFightDefeat, Bridge.fn.cacheBind(this, this.OnBossDefeat));
                    LazySingleton$1(EventDispatcher).Instance.RemoveListener(EventID.OnLoadSkin, Bridge.fn.cacheBind(this, this.OnLoadSkinBoss$1));
                    LazySingleton$1(EventDispatcher).Instance.RemoveListener(EventID.OnAttackBoss, Bridge.fn.cacheBind(this, this.OnBossAttack));

                }
            },
            /*BossController.OnDisable$1 end.*/

            /*BossController.OnBossDefeat start.*/
            OnBossDefeat: function (obj) {
if ( TRACE ) { TRACE( "BossController#OnBossDefeat", this ); }

                var $t;
                this.isDefeat = true;
                this.anim.enabled = false;
                $t = Bridge.getEnumerator(this.allRig);
                try {
                    while ($t.moveNext()) {
                        var rig = $t.Current;
                        rig.isKinematic = false;
                        if (UnityEngine.Component.op_Inequality(rig.gameObject.GetComponent(UnityEngine.BoxCollider), null)) {
                            rig.gameObject.GetComponent(UnityEngine.BoxCollider).isTrigger = false;
                        }
                        if (UnityEngine.Component.op_Inequality(rig.gameObject.GetComponent(UnityEngine.CapsuleCollider), null)) {
                            rig.gameObject.GetComponent(UnityEngine.CapsuleCollider).isTrigger = false;
                        }
                        rig.AddForce$1(new pc.Vec3( 0, 15, 10 ), UnityEngine.ForceMode.Impulse);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*BossController.OnBossDefeat end.*/

            /*BossController.OnLoadSkinBoss$1 start.*/
            OnLoadSkinBoss$1: function (obj) {
if ( TRACE ) { TRACE( "BossController#OnLoadSkinBoss$1", this ); }


            },
            /*BossController.OnLoadSkinBoss$1 end.*/

            /*BossController.OnLoadSkinBoss start.*/
            OnLoadSkinBoss: function () {
if ( TRACE ) { TRACE( "BossController#OnLoadSkinBoss", this ); }

                for (var i = 0; i < this.arSkin.length; i = (i + 1) | 0) {
                    this.arSkin[i].SetActive(false);
                }
                this.arSkin[this.transform.parent.GetComponent(FighterController).fighterID].SetActive(true);

                for (var i1 = 0; i1 < this.listWeaponRight.Count; i1 = (i1 + 1) | 0) {
                    this.listWeaponRight.getItem(i1).gameObject.SetActive(false);
                }
                this.listWeaponRight.getItem(this.transform.parent.GetComponent(FighterController).fighterID).gameObject.SetActive(true);

                for (var i2 = 0; i2 < this.listWeaponLeft.Count; i2 = (i2 + 1) | 0) {
                    this.listWeaponLeft.getItem(i2).gameObject.SetActive(false);
                }
                this.listWeaponLeft.getItem(this.transform.parent.GetComponent(FighterController).fighterID).gameObject.SetActive(true);
            },
            /*BossController.OnLoadSkinBoss end.*/

            /*BossController.OnBossAttack start.*/
            OnBossAttack: function (obj) {
if ( TRACE ) { TRACE( "BossController#OnBossAttack", this ); }

                //Debug.Log(transform.parent.GetComponent<FighterController>().fighterID);
                switch (((this.transform.parent.GetComponent(FighterController).fighterID + 1) | 0)) {
                    case 1: 
                    case 2: 
                    case 3: 
                        this.anim.Play$2("boss_melee");
                        break;
                    case 4: 
                        this.anim.Play$2("boss_spear");
                        break;
                    case 5: 
                        this.anim.Play$2("boss_bow");
                        break;
                    case 8: 
                        this.anim.Play$2("boss_piston");
                        break;
                    case 6: 
                    case 7: 
                    case 9: 
                    case 10: 
                    case 11: 
                        this.anim.Play$2("boss_rifle");
                        break;
                }
                if (this.transform.parent.GetComponent(FighterController).fighterID >= 4) {
                    this.isShooter = true;
                    this.ShootBulletBoss(this.transform.parent.GetComponent(FighterController).fighterID);
                }
            },
            /*BossController.OnBossAttack end.*/

            /*BossController.ShootBulletBoss start.*/
            ShootBulletBoss: function (id) {
if ( TRACE ) { TRACE( "BossController#ShootBulletBoss", this ); }

                var timePerShoot = 0.3;
                if (this.isShooter) {
                    this.distanceHitbox = 5.0;
                    switch (id) {
                        case 4: 
                            timePerShoot = 0.35;
                            //anim.Play("run_bow");
                            break;
                        case 5: 
                            timePerShoot = 0.35;
                            //anim.Play("run_crossbow");
                            break;
                        case 6: 
                            timePerShoot = 0.3;
                            //anim.Play("run_musket");
                            break;
                        case 7: 
                            timePerShoot = 0.3;
                            //anim.Play("run_dual_piston");
                            break;
                        case 8: 
                        case 9: 
                        case 10: 
                        case 11: 
                            timePerShoot = 0.2;
                            //anim.Play("run_rifle");
                            break;
                    }
                    this.StopAllCoroutines();
                    this.StartCoroutine$1(this.CoShootBulletBoss(timePerShoot, id));
                }
            },
            /*BossController.ShootBulletBoss end.*/

            /*BossController.CoShootBulletBoss start.*/
            CoShootBulletBoss: function (timePerShoot, id) {
if ( TRACE ) { TRACE( "BossController#CoShootBulletBoss", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    prefabBullet,
                    goBullet,
                    goBullet2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    prefabBullet = null;
                                        if (id === 4 || id === 5) {
                                            prefabBullet = this.arrow;
                                        }
                                        if (id === 6) {
                                            prefabBullet = this.bullet1;
                                        }
                                        if (id === 7) {
                                            prefabBullet = this.bullet2;
                                        }
                                        if (id === 8) {
                                            prefabBullet = this.bullet3;
                                        }
                                        if (id === 9) {
                                            prefabBullet = this.laser1;
                                        }
                                        if (id === 10) {
                                            prefabBullet = this.laser2;
                                        }
                                        //Debug.Log("Shot");
                                        goBullet = SCR_Pool.GetFreeObject(prefabBullet);
                                        goBullet.SetActive(true);
                                        goBullet.transform.position = this.tfBullet.position.$clone();

                                        if (id === 7) {
                                            goBullet.transform.position = this.tfBullet.position.$clone().sub( new pc.Vec3( 0.2, 0, 0 ) );

                                            goBullet2 = SCR_Pool.GetFreeObject(prefabBullet);
                                            goBullet2.SetActive(true);
                                            goBullet2.transform.position = this.tfBullet.position.$clone().add( new pc.Vec3( 0.1, 0, 0 ) );
                                            goBullet2.GetComponent(BulletController).speed = -10;

                                            this.StartCoroutine$1(this.CoDisableObject$1(goBullet2, 2));
                                        }
                                        goBullet.GetComponent(BulletController).speed = -10;
                                        this.StartCoroutine$1(this.CoDisableObject$1(goBullet, 2));
                                        this.fx_shoot.Play();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(timePerShoot);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (this.isShooter && !PlayerController.Instance.isCelebrate && !this.isDefeat) {
                                            this.StartCoroutine$1(this.CoShootBulletBoss(timePerShoot, id));
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BossController.CoShootBulletBoss end.*/

            /*BossController.CoDisableObject$1 start.*/
            CoDisableObject$1: function (go, delay) {
if ( TRACE ) { TRACE( "BossController#CoDisableObject$1", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    go.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BossController.CoDisableObject$1 end.*/


        },
        overloads: {
            "Update()": "Update$1",
            "OnEnable()": "OnEnable$1",
            "OnDisable()": "OnDisable$1",
            "OnLoadSkinBoss(object)": "OnLoadSkinBoss$1",
            "CoDisableObject(GameObject, float)": "CoDisableObject$1"
        }
    });
    /*BossController end.*/

    /*EventDispatcher start.*/
    Bridge.define("EventDispatcher", {
        inherits: function () {
if ( TRACE ) { TRACE( "EventDispatcher#inherits", this ); }
 return [LazySingleton$1(EventDispatcher)]; },
        fields: {
            _earlyListeners: null,
            _lateListeners: null,
            _normalListeners: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EventDispatcher#init", this ); }

                this._earlyListeners = new (System.Collections.Generic.Dictionary$2(System.Int32,Function)).ctor();
                this._lateListeners = new (System.Collections.Generic.Dictionary$2(System.Int32,Function)).ctor();
                this._normalListeners = new (System.Collections.Generic.Dictionary$2(System.Int32,Function)).ctor();
            }
        },
        methods: {
            /*EventDispatcher.RegisterListener start.*/
            RegisterListener: function (eventID, callback, eventType) {
if ( TRACE ) { TRACE( "EventDispatcher#RegisterListener", this ); }

                if (eventType === void 0) { eventType = 1; }
                switch (eventType) {
                    case DispatcherType.Early: 
                        this.RegisterListener$1(this._earlyListeners, eventID, callback);
                        break;
                    case DispatcherType.Normal: 
                        this.RegisterListener$1(this._normalListeners, eventID, callback);
                        break;
                    case DispatcherType.Late: 
                        this.RegisterListener$1(this._lateListeners, eventID, callback);
                        break;
                }
            },
            /*EventDispatcher.RegisterListener end.*/

            /*EventDispatcher.RegisterListener$1 start.*/
            RegisterListener$1: function (listener, eventID, callback) {
if ( TRACE ) { TRACE( "EventDispatcher#RegisterListener$1", this ); }

                if (listener.containsKey(eventID)) {
                    listener.setItem(eventID, Bridge.fn.combine(listener.getItem(eventID), callback));
                } else {
                    listener.add(eventID, null);
                    listener.setItem(eventID, Bridge.fn.combine(listener.getItem(eventID), callback));
                }
            },
            /*EventDispatcher.RegisterListener$1 end.*/

            /*EventDispatcher.PostEvent start.*/
            PostEvent: function (eventID, param) {
if ( TRACE ) { TRACE( "EventDispatcher#PostEvent", this ); }

                if (param === void 0) { param = null; }
                this.PostEvent$1(this._earlyListeners, eventID, param);
                this.PostEvent$1(this._normalListeners, eventID, param);
                this.PostEvent$1(this._lateListeners, eventID, param);
            },
            /*EventDispatcher.PostEvent end.*/

            /*EventDispatcher.PostEvent$1 start.*/
            PostEvent$1: function (listener, eventID, param) {
if ( TRACE ) { TRACE( "EventDispatcher#PostEvent$1", this ); }

                if (param === void 0) { param = null; }
                if (!listener.containsKey(eventID)) {
                    return;
                }
                var action = listener.getItem(eventID);
                if (!Bridge.staticEquals(action, null)) {
                    action(param);
                } else {
                    listener.remove(eventID);
                }
            },
            /*EventDispatcher.PostEvent$1 end.*/

            /*EventDispatcher.RemoveListener start.*/
            RemoveListener: function (eventID, callback) {
if ( TRACE ) { TRACE( "EventDispatcher#RemoveListener", this ); }

                this.RemoveListener$1(this._earlyListeners, eventID, callback);
                this.RemoveListener$1(this._normalListeners, eventID, callback);
                this.RemoveListener$1(this._lateListeners, eventID, callback);
            },
            /*EventDispatcher.RemoveListener end.*/

            /*EventDispatcher.RemoveListener$1 start.*/
            RemoveListener$1: function (listener, eventID, callback) {
if ( TRACE ) { TRACE( "EventDispatcher#RemoveListener$1", this ); }

                if (!listener.containsKey(eventID)) {
                    return;
                }
                listener.setItem(eventID, Bridge.fn.remove(listener.getItem(eventID), callback));
            },
            /*EventDispatcher.RemoveListener$1 end.*/

            /*EventDispatcher.ClearAllListener start.*/
            ClearAllListener: function () {
if ( TRACE ) { TRACE( "EventDispatcher#ClearAllListener", this ); }

                this._earlyListeners.clear();
                this._normalListeners.clear();
                this._lateListeners.clear();
            },
            /*EventDispatcher.ClearAllListener end.*/


        },
        overloads: {
            "RegisterListener(Dictionary<int, Action<object>>, int, Action<object>)": "RegisterListener$1",
            "PostEvent(Dictionary<int, Action<object>>, int, object)": "PostEvent$1",
            "RemoveListener(Dictionary<int, Action<object>>, int, Action<object>)": "RemoveListener$1"
        }
    });
    /*EventDispatcher end.*/

    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections.Generic","UnityEngine.EventSystems","UnityEngine.UI","System.Collections","TMPro","DG.Tweening","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options","EpicToonFX"];

    /*ParticleEffectsLibrary start.*/
    $m("ParticleEffectsLibrary", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"GetCurrentPENameString","t":8,"sn":"GetCurrentPENameString","rt":$n[0].String},{"a":2,"n":"NextParticleEffect","t":8,"sn":"NextParticleEffect","rt":$n[0].Void},{"a":2,"n":"PreviousParticleEffect","t":8,"sn":"PreviousParticleEffect","rt":$n[0].Void},{"a":2,"n":"SpawnParticleEffect","t":8,"pi":[{"n":"positionInWorldToSpawn","pt":$n[1].Vector3,"ps":0}],"sn":"SpawnParticleEffect","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"CurrentParticleEffectIndex","t":4,"rt":$n[0].Int32,"sn":"CurrentParticleEffectIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"CurrentParticleEffectNum","t":4,"rt":$n[0].Int32,"sn":"CurrentParticleEffectNum","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GlobalAccess","is":true,"t":4,"rt":ParticleEffectsLibrary,"sn":"GlobalAccess"},{"a":2,"n":"ParticleEffectLifetimes","t":4,"rt":$n[0].Array.type(System.Single),"sn":"ParticleEffectLifetimes"},{"a":2,"n":"ParticleEffectPrefabs","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"ParticleEffectPrefabs"},{"a":2,"n":"ParticleEffectSpawnOffsets","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"ParticleEffectSpawnOffsets"},{"a":2,"n":"TotalEffects","t":4,"rt":$n[0].Int32,"sn":"TotalEffects","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"currentActivePEList","t":4,"rt":$n[2].List$1(UnityEngine.Transform),"sn":"currentActivePEList"},{"a":1,"n":"effectNameString","t":4,"rt":$n[0].String,"sn":"effectNameString"},{"a":1,"n":"spawnPosition","t":4,"rt":$n[1].Vector3,"sn":"spawnPosition"}]}; }, $n);
    /*ParticleEffectsLibrary end.*/

    /*ButtonTypes start.*/
    $m("ButtonTypes", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Next","is":true,"t":4,"rt":ButtonTypes,"sn":"Next","box":function ($v) { return Bridge.box($v, ButtonTypes, System.Enum.toStringFn(ButtonTypes));}},{"a":2,"n":"NotDefined","is":true,"t":4,"rt":ButtonTypes,"sn":"NotDefined","box":function ($v) { return Bridge.box($v, ButtonTypes, System.Enum.toStringFn(ButtonTypes));}},{"a":2,"n":"Previous","is":true,"t":4,"rt":ButtonTypes,"sn":"Previous","box":function ($v) { return Bridge.box($v, ButtonTypes, System.Enum.toStringFn(ButtonTypes));}}]}; }, $n);
    /*ButtonTypes end.*/

    /*PEButtonScript start.*/
    $m("PEButtonScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnButtonClicked","t":8,"sn":"OnButtonClicked","rt":$n[0].Void},{"a":2,"n":"OnPointerEnter","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerEnter","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"OnPointerExit","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerExit","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"ButtonType","t":4,"rt":ButtonTypes,"sn":"ButtonType","box":function ($v) { return Bridge.box($v, ButtonTypes, System.Enum.toStringFn(ButtonTypes));}},{"a":1,"n":"myButton","t":4,"rt":$n[4].Button,"sn":"myButton"}]}; }, $n);
    /*PEButtonScript end.*/

    /*PEDestoryTimed start.*/
    $m("PEDestoryTimed", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*PEDestoryTimed end.*/

    /*UICanvasManager start.*/
    $m("UICanvasManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ClearToolTip","t":8,"sn":"ClearToolTip","rt":$n[0].Void},{"a":1,"n":"SelectNextPE","t":8,"sn":"SelectNextPE","rt":$n[0].Void},{"a":1,"n":"SelectPreviousPE","t":8,"sn":"SelectPreviousPE","rt":$n[0].Void},{"a":1,"n":"SpawnCurrentParticleEffect","t":8,"sn":"SpawnCurrentParticleEffect","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"UIButtonClick","t":8,"pi":[{"n":"buttonTypeClicked","pt":ButtonTypes,"ps":0}],"sn":"UIButtonClick","rt":$n[0].Void,"p":[ButtonTypes]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"UpdateToolTip","t":8,"pi":[{"n":"toolTipType","pt":ButtonTypes,"ps":0}],"sn":"UpdateToolTip","rt":$n[0].Void,"p":[ButtonTypes]},{"a":2,"n":"GlobalAccess","is":true,"t":4,"rt":UICanvasManager,"sn":"GlobalAccess"},{"a":2,"n":"MouseOverButton","t":4,"rt":$n[0].Boolean,"sn":"MouseOverButton","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"PENameText","t":4,"rt":$n[4].Text,"sn":"PENameText"},{"a":2,"n":"ToolTipText","t":4,"rt":$n[4].Text,"sn":"ToolTipText"},{"a":1,"n":"rayHit","t":4,"rt":$n[1].RaycastHit,"sn":"rayHit"}]}; }, $n);
    /*UICanvasManager end.*/

    /*ETFXProjectileScript start.*/
    $m("ETFXProjectileScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"hit","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"hasCollided","t":4,"rt":$n[0].Boolean,"sn":"hasCollided","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"impactNormal","t":4,"rt":$n[1].Vector3,"sn":"impactNormal"},{"a":2,"n":"impactParticle","t":4,"rt":$n[1].GameObject,"sn":"impactParticle"},{"a":2,"n":"muzzleParticle","t":4,"rt":$n[1].GameObject,"sn":"muzzleParticle"},{"a":2,"n":"projectileParticle","t":4,"rt":$n[1].GameObject,"sn":"projectileParticle"},{"a":2,"n":"trailParticles","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"trailParticles"}]}; }, $n);
    /*ETFXProjectileScript end.*/

    /*ETFXSceneManager start.*/
    $m("ETFXSceneManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"LoadScene1","t":8,"sn":"LoadScene1","rt":$n[0].Void},{"a":2,"n":"LoadScene10","t":8,"sn":"LoadScene10","rt":$n[0].Void},{"a":2,"n":"LoadScene11","t":8,"sn":"LoadScene11","rt":$n[0].Void},{"a":2,"n":"LoadScene12","t":8,"sn":"LoadScene12","rt":$n[0].Void},{"a":2,"n":"LoadScene13","t":8,"sn":"LoadScene13","rt":$n[0].Void},{"a":2,"n":"LoadScene2","t":8,"sn":"LoadScene2","rt":$n[0].Void},{"a":2,"n":"LoadScene3","t":8,"sn":"LoadScene3","rt":$n[0].Void},{"a":2,"n":"LoadScene4","t":8,"sn":"LoadScene4","rt":$n[0].Void},{"a":2,"n":"LoadScene5","t":8,"sn":"LoadScene5","rt":$n[0].Void},{"a":2,"n":"LoadScene6","t":8,"sn":"LoadScene6","rt":$n[0].Void},{"a":2,"n":"LoadScene7","t":8,"sn":"LoadScene7","rt":$n[0].Void},{"a":2,"n":"LoadScene8","t":8,"sn":"LoadScene8","rt":$n[0].Void},{"a":2,"n":"LoadScene9","t":8,"sn":"LoadScene9","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"GUIHide","t":4,"rt":$n[0].Boolean,"sn":"GUIHide","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GUIHide2","t":4,"rt":$n[0].Boolean,"sn":"GUIHide2","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GUIHide3","t":4,"rt":$n[0].Boolean,"sn":"GUIHide3","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*ETFXSceneManager end.*/

    /*BossController start.*/
    $m("BossController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CoDisableObject","t":8,"pi":[{"n":"go","pt":$n[1].GameObject,"ps":0},{"n":"delay","pt":$n[0].Single,"ps":1}],"sn":"CoDisableObject$1","rt":$n[5].IEnumerator,"p":[$n[1].GameObject,$n[0].Single]},{"a":1,"n":"CoShootBulletBoss","t":8,"pi":[{"n":"timePerShoot","pt":$n[0].Single,"ps":0},{"n":"id","pt":$n[0].Int32,"ps":1}],"sn":"CoShootBulletBoss","rt":$n[5].IEnumerator,"p":[$n[0].Single,$n[0].Int32]},{"a":2,"n":"OnBossAttack","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"OnBossAttack","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"OnBossDefeat","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"OnBossDefeat","rt":$n[0].Void,"p":[$n[0].Object]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable$1","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable$1","rt":$n[0].Void},{"a":2,"n":"OnLoadSkinBoss","t":8,"sn":"OnLoadSkinBoss","rt":$n[0].Void},{"a":2,"n":"OnLoadSkinBoss","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"OnLoadSkinBoss$1","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"ShootBulletBoss","t":8,"pi":[{"n":"id","pt":$n[0].Int32,"ps":0}],"sn":"ShootBulletBoss","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update$1","rt":$n[0].Void}]}; }, $n);
    /*BossController end.*/

    /*BulletController start.*/
    $m("BulletController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CoDisappear","t":8,"sn":"CoDisappear","rt":$n[5].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"timeDisappear","t":4,"rt":$n[0].Single,"sn":"timeDisappear","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BulletController end.*/

    /*CameraFollow start.*/
    $m("CameraFollow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"isLook","t":4,"rt":$n[0].Boolean,"sn":"isLook","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"offset","t":4,"rt":$n[1].Vector3,"sn":"offset"},{"a":2,"n":"smoothing","t":4,"rt":$n[0].Single,"sn":"smoothing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"target","t":4,"rt":$n[1].Transform,"sn":"target"}]}; }, $n);
    /*CameraFollow end.*/

    /*CanvasScalerMatch start.*/
    $m("CanvasScalerMatch", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"arAanvasScaler","t":4,"rt":System.Array.type(UnityEngine.UI.CanvasScaler),"sn":"arAanvasScaler"}]}; }, $n);
    /*CanvasScalerMatch end.*/

    /*CharacterController start.*/
    $m("CharacterController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddClothes","t":8,"sn":"AddClothes","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CoDisableObject","t":8,"pi":[{"n":"go","pt":$n[1].GameObject,"ps":0},{"n":"delay","pt":$n[0].Single,"ps":1}],"sn":"CoDisableObject","rt":$n[5].IEnumerator,"p":[$n[1].GameObject,$n[0].Single]},{"a":1,"n":"CoShootBullet","t":8,"pi":[{"n":"timePerShoot","pt":$n[0].Single,"ps":0}],"sn":"CoShootBullet","rt":$n[5].IEnumerator,"p":[$n[0].Single]},{"a":2,"n":"OnAttackBoss","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"OnAttackBoss","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"OnAttackMelee","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"OnAttackMelee","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"OnChangeDistanceHitbox","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"OnChangeDistanceHitbox","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"OnCheckLastHit","t":8,"sn":"OnCheckLastHit","rt":$n[0].Void},{"a":2,"n":"OnDefeat","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"OnDefeat","rt":$n[0].Void,"p":[$n[0].Object]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"OnEnemyKnockout","t":8,"sn":"OnEnemyKnockout","rt":$n[0].Void},{"a":2,"n":"OnFightingBoss","t":8,"sn":"OnFightingBoss","rt":$n[0].Void},{"a":2,"n":"OnIncreaseAnim","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"OnIncreaseAnim","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"OnLoadSkin","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"OnLoadSkin","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"OnLoadSkin2","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"OnLoadSkin2","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"OnLoadWeapon","t":8,"sn":"OnLoadWeapon","rt":$n[0].Void},{"a":2,"n":"OnRun","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"OnRun","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"OnShowFxHitted","t":8,"sn":"OnShowFxHitted","rt":$n[0].Void},{"a":2,"n":"OnShowSpearFX","t":8,"sn":"OnShowSpearFX","rt":$n[0].Void},{"a":2,"n":"OnStopAllCoroutines","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"OnStopAllCoroutines","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"OnTurnOffAllWeapon","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"OnTurnOffAllWeapon","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"OnVictory","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"OnVictory","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"RemoveClothes","t":8,"sn":"RemoveClothes","rt":$n[0].Void},{"a":2,"n":"ShootBullet","t":8,"sn":"ShootBullet","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"allRig","t":4,"rt":System.Array.type(UnityEngine.Rigidbody),"sn":"allRig"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"anim","t":4,"rt":$n[1].Animator,"sn":"anim"},{"a":2,"n":"arMeshWeaponSkin","t":4,"rt":System.Array.type(UnityEngine.Mesh),"sn":"arMeshWeaponSkin"},{"a":2,"n":"arSkin","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"arSkin"},{"a":2,"n":"arrow","t":4,"rt":$n[1].GameObject,"sn":"arrow"},{"a":2,"n":"bullet1","t":4,"rt":$n[1].GameObject,"sn":"bullet1"},{"a":2,"n":"bullet2","t":4,"rt":$n[1].GameObject,"sn":"bullet2"},{"a":2,"n":"bullet3","t":4,"rt":$n[1].GameObject,"sn":"bullet3"},{"a":1,"n":"colEnemy","t":4,"rt":$n[1].Collider,"sn":"colEnemy"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"distanceHitbox","t":4,"rt":$n[0].Single,"sn":"distanceHitbox","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"fx_hitted","t":4,"rt":$n[1].ParticleSystem,"sn":"fx_hitted"},{"a":2,"n":"fx_shoot","t":4,"rt":$n[1].ParticleSystem,"sn":"fx_shoot"},{"a":2,"n":"fx_slash","t":4,"rt":$n[1].ParticleSystem,"sn":"fx_slash"},{"a":2,"n":"fx_spear_hit","t":4,"rt":$n[1].ParticleSystem,"sn":"fx_spear_hit"},{"a":1,"n":"isAttacking","t":4,"rt":$n[0].Boolean,"sn":"isAttacking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isBoss","t":4,"rt":$n[0].Boolean,"sn":"isBoss","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isDefeat","t":4,"rt":$n[0].Boolean,"sn":"isDefeat","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("-----Shooter-----")],"a":2,"n":"isShooter","t":4,"rt":$n[0].Boolean,"sn":"isShooter","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"laser1","t":4,"rt":$n[1].GameObject,"sn":"laser1"},{"a":2,"n":"laser2","t":4,"rt":$n[1].GameObject,"sn":"laser2"},{"a":2,"n":"level","t":4,"rt":$n[0].Int32,"sn":"level","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"listWeaponLeft","t":4,"rt":$n[2].List$1(UnityEngine.Transform),"sn":"listWeaponLeft"},{"a":2,"n":"listWeaponRight","t":4,"rt":$n[2].List$1(UnityEngine.Transform),"sn":"listWeaponRight"},{"a":2,"n":"skinID","t":4,"rt":$n[0].Int32,"sn":"skinID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"tfBullet","t":4,"rt":$n[1].Transform,"sn":"tfBullet"},{"a":2,"n":"weaponsLeft","t":4,"rt":$n[1].Transform,"sn":"weaponsLeft"},{"at":[new UnityEngine.HeaderAttribute("-----Weapons-----")],"a":2,"n":"weaponsRight","t":4,"rt":$n[1].Transform,"sn":"weaponsRight"}]}; }, $n);
    /*CharacterController end.*/

    /*ClampScore start.*/
    $m("ClampScore", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"goScore","t":4,"rt":$n[1].GameObject,"sn":"goScore"}]}; }, $n);
    /*ClampScore end.*/

    /*EnemyController start.*/
    $m("EnemyController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"BotDied","t":8,"sn":"BotDied","rt":$n[5].IEnumerator},{"a":2,"n":"Knockout","t":8,"pi":[{"n":"isShot","pt":$n[0].Boolean,"ps":0}],"sn":"Knockout","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"OnLoadSkin","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"OnLoadSkin","rt":$n[0].Void,"p":[$n[0].Object]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"allRig","t":4,"rt":System.Array.type(UnityEngine.Rigidbody),"sn":"allRig"},{"a":2,"n":"arEnemySkin","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"arEnemySkin"},{"a":1,"n":"currentEnemySkinID","t":4,"rt":$n[0].Int32,"sn":"currentEnemySkinID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"dirFly","t":4,"rt":$n[1].Vector3,"sn":"dirFly"},{"a":2,"n":"isKnockout","t":4,"rt":$n[0].Boolean,"sn":"isKnockout","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isMulti","t":4,"rt":$n[0].Boolean,"sn":"isMulti","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*EnemyController end.*/

    /*FighterController start.*/
    $m("FighterController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AttackByTime","t":8,"sn":"AttackByTime","rt":$n[0].Void},{"a":2,"n":"CheckLastHit","t":8,"sn":"CheckLastHit","rt":$n[0].Void},{"a":1,"n":"CoAttackByTime","t":8,"pi":[{"n":"delay","pt":$n[0].Single,"ps":0}],"sn":"CoAttackByTime","rt":$n[5].IEnumerator,"p":[$n[0].Single]},{"a":1,"n":"CoTimeScale","t":8,"pi":[{"n":"delay","pt":$n[0].Single,"ps":0}],"sn":"CoTimeScale","rt":$n[5].IEnumerator,"p":[$n[0].Single]},{"a":1,"n":"CoWaitCameraLose","t":8,"sn":"CoWaitCameraLose","rt":$n[5].IEnumerator},{"a":1,"n":"CoWaitCameraWin","t":8,"sn":"CoWaitCameraWin","rt":$n[5].IEnumerator},{"a":2,"n":"OnBeHit","t":8,"pi":[{"n":"damage","pt":$n[0].Single,"ps":0}],"sn":"OnBeHit","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"OnBeginFighting","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"OnBeginFighting","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"OnDefeat","t":8,"sn":"OnDefeat","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"currentHP","t":4,"rt":$n[0].Single,"sn":"currentHP","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"dps","t":4,"rt":$n[0].Single,"sn":"dps","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"fighterID","t":4,"rt":$n[0].Int32,"sn":"fighterID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"hpBar","t":4,"rt":$n[1].GameObject,"sn":"hpBar"},{"a":2,"n":"isBoss","t":4,"rt":$n[0].Boolean,"sn":"isBoss","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"obj","t":4,"rt":FighterController,"sn":"obj"},{"a":2,"n":"opponent","t":4,"rt":FighterController,"sn":"opponent"},{"a":2,"n":"tapToAttackHint","t":4,"rt":$n[1].GameObject,"sn":"tapToAttackHint"},{"a":2,"n":"tfChar","t":4,"rt":$n[1].Transform,"sn":"tfChar"},{"a":2,"n":"totalHP","t":4,"rt":$n[0].Single,"sn":"totalHP","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*FighterController end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CoDisableObject","t":8,"pi":[{"n":"go","pt":$n[1].GameObject,"ps":0},{"n":"delay","pt":$n[0].Single,"ps":1}],"sn":"CoDisableObject","rt":$n[5].IEnumerator,"p":[$n[1].GameObject,$n[0].Single]},{"a":2,"n":"ShowCoinFX","t":8,"pi":[{"n":"pos","pt":$n[1].Vector3,"ps":0}],"sn":"ShowCoinFX","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"isFullRewardSkin","t":8,"sn":"isFullRewardSkin","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Instance","is":true,"t":4,"rt":GameManager,"sn":"Instance"},{"a":2,"n":"fx_coin_blast","t":4,"rt":$n[1].GameObject,"sn":"fx_coin_blast"},{"a":2,"n":"fx_coin_blast_UI","t":4,"rt":$n[1].GameObject,"sn":"fx_coin_blast_UI"},{"at":[new UnityEngine.HeaderAttribute("-----Fighting-----")],"a":2,"n":"panelFighting","t":4,"rt":$n[1].Transform,"sn":"panelFighting"},{"a":2,"n":"prefabHpBar","t":4,"rt":$n[1].GameObject,"sn":"prefabHpBar"},{"a":2,"n":"prefabHpLost","t":4,"rt":$n[1].GameObject,"sn":"prefabHpLost"},{"a":2,"n":"rewardCoin","t":4,"rt":$n[0].Int32,"sn":"rewardCoin","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("-----FX-----")],"a":2,"n":"tfFX","t":4,"rt":$n[1].Transform,"sn":"tfFX"},{"a":2,"n":"totalCoin","t":4,"rt":$n[0].Int32,"sn":"totalCoin","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*GameManager end.*/

    /*GameUIManager start.*/
    $m("GameUIManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ButtonDirectToStore","t":8,"sn":"ButtonDirectToStore","rt":$n[0].Void},{"a":2,"n":"ButtonDownload","t":8,"sn":"ButtonDownload","rt":$n[0].Void},{"a":1,"n":"CoShowPopupDefeat","t":8,"pi":[{"n":"delay","pt":$n[0].Single,"ps":0}],"sn":"CoShowPopupDefeat","rt":$n[5].IEnumerator,"p":[$n[0].Single]},{"a":1,"n":"CoShowPopupEnding","t":8,"pi":[{"n":"delay","pt":$n[0].Single,"ps":0}],"sn":"CoShowPopupEnding","rt":$n[5].IEnumerator,"p":[$n[0].Single]},{"a":2,"n":"OnCickStartGame","t":8,"sn":"OnCickStartGame","rt":$n[0].Void},{"a":2,"n":"OnClickGetSkin","t":8,"sn":"OnClickGetSkin","rt":$n[0].Void},{"a":2,"n":"ShowPopupDefeat","t":8,"pi":[{"n":"delay","pt":$n[0].Single,"ps":0}],"sn":"ShowPopupDefeat","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"ShowPopupEnding","t":8,"pi":[{"n":"delay","pt":$n[0].Single,"ps":0}],"sn":"ShowPopupEnding","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"ShowText","t":8,"pi":[{"n":"st","pt":$n[0].String,"ps":0},{"n":"pos","pt":$n[1].Vector3,"ps":1}],"sn":"ShowText","rt":$n[0].Void,"p":[$n[0].String,$n[1].Vector3]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"UpdateTextCoin","t":8,"pi":[{"n":"amout","pt":$n[0].Int32,"ps":0}],"sn":"UpdateTextCoin","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"Instance","is":true,"t":4,"rt":GameUIManager,"sn":"Instance"},{"at":[new UnityEngine.HeaderAttribute("---Icon Skin---")],"a":2,"n":"arIconSkinFulls","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"arIconSkinFulls"},{"a":2,"n":"buttonGetSkin","t":4,"rt":$n[4].Button,"sn":"buttonGetSkin"},{"a":2,"n":"canvasMain","t":4,"rt":$n[1].GameObject,"sn":"canvasMain"},{"a":1,"n":"ctaClick","t":4,"rt":$n[0].Int32,"sn":"ctaClick","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"durationLevel","t":4,"rt":$n[0].Single,"sn":"durationLevel","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"imageIconRewardSkin","t":4,"rt":$n[4].Image,"sn":"imageIconRewardSkin"},{"a":2,"n":"imgCoin","t":4,"rt":$n[4].Image,"sn":"imgCoin"},{"a":1,"n":"installClick","t":4,"rt":$n[0].Int32,"sn":"installClick","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"installContainer","t":4,"rt":$n[1].GameObject,"sn":"installContainer"},{"a":2,"n":"panelFighting","t":4,"rt":$n[1].GameObject,"sn":"panelFighting"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"panelStart","t":4,"rt":$n[1].GameObject,"sn":"panelStart"},{"a":2,"n":"popupDefeat","t":4,"rt":$n[1].GameObject,"sn":"popupDefeat"},{"a":2,"n":"popupEnding","t":4,"rt":$n[1].GameObject,"sn":"popupEnding"},{"at":[new UnityEngine.HeaderAttribute("---Reward Skin---")],"a":2,"n":"popupGetSkin","t":4,"rt":$n[1].GameObject,"sn":"popupGetSkin"},{"at":[new UnityEngine.HeaderAttribute("---Show Text---")],"a":2,"n":"prefabTextShow","t":4,"rt":$n[1].GameObject,"sn":"prefabTextShow"},{"a":1,"n":"tempText","t":4,"rt":$n[1].GameObject,"sn":"tempText"},{"a":1,"n":"tempTimeShowText","t":4,"rt":$n[0].Single,"sn":"tempTimeShowText","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("-----Main UI-----")],"a":2,"n":"textCoin","t":4,"rt":$n[4].Text,"sn":"textCoin"},{"a":2,"n":"tfText","t":4,"rt":$n[1].Transform,"sn":"tfText"}]}; }, $n);
    /*GameUIManager end.*/

    /*TypeCalculate start.*/
    $m("TypeCalculate", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Divide","is":true,"t":4,"rt":TypeCalculate,"sn":"Divide","box":function ($v) { return Bridge.box($v, TypeCalculate, System.Enum.toStringFn(TypeCalculate));}},{"a":2,"n":"Minus","is":true,"t":4,"rt":TypeCalculate,"sn":"Minus","box":function ($v) { return Bridge.box($v, TypeCalculate, System.Enum.toStringFn(TypeCalculate));}},{"a":2,"n":"Multiply","is":true,"t":4,"rt":TypeCalculate,"sn":"Multiply","box":function ($v) { return Bridge.box($v, TypeCalculate, System.Enum.toStringFn(TypeCalculate));}},{"a":2,"n":"Plus","is":true,"t":4,"rt":TypeCalculate,"sn":"Plus","box":function ($v) { return Bridge.box($v, TypeCalculate, System.Enum.toStringFn(TypeCalculate));}}]}; }, $n);
    /*TypeCalculate end.*/

    /*TypeTimeUnit start.*/
    $m("TypeTimeUnit", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Month","is":true,"t":4,"rt":TypeTimeUnit,"sn":"Month","box":function ($v) { return Bridge.box($v, TypeTimeUnit, System.Enum.toStringFn(TypeTimeUnit));}},{"a":2,"n":"Year","is":true,"t":4,"rt":TypeTimeUnit,"sn":"Year","box":function ($v) { return Bridge.box($v, TypeTimeUnit, System.Enum.toStringFn(TypeTimeUnit));}}]}; }, $n);
    /*TypeTimeUnit end.*/

    /*TypeMotion start.*/
    $m("TypeMotion", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Motion","is":true,"t":4,"rt":TypeMotion,"sn":"Motion","box":function ($v) { return Bridge.box($v, TypeMotion, System.Enum.toStringFn(TypeMotion));}},{"a":2,"n":"Static","is":true,"t":4,"rt":TypeMotion,"sn":"Static","box":function ($v) { return Bridge.box($v, TypeMotion, System.Enum.toStringFn(TypeMotion));}}]}; }, $n);
    /*TypeMotion end.*/

    /*ItemController start.*/
    $m("ItemController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ConvertTime","t":8,"sn":"ConvertTime","rt":$n[0].Void},{"a":2,"n":"GetTypeCalculateSign","t":8,"sn":"GetTypeCalculateSign","rt":$n[0].String},{"a":2,"n":"SetItemValue","t":8,"sn":"SetItemValue","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"dirMotion","t":4,"rt":$n[1].Vector3,"sn":"dirMotion"},{"a":2,"n":"portalBad","t":4,"rt":$n[1].Material,"sn":"portalBad"},{"a":2,"n":"portalGood","t":4,"rt":$n[1].Material,"sn":"portalGood"},{"a":2,"n":"textTime","t":4,"rt":$n[6].TextMeshPro,"sn":"textTime"},{"a":2,"n":"textUnit","t":4,"rt":$n[6].TextMeshPro,"sn":"textUnit"},{"a":2,"n":"totalTime","t":4,"rt":$n[0].Int32,"sn":"totalTime","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"typeCalculate","t":4,"rt":TypeCalculate,"sn":"typeCalculate","box":function ($v) { return Bridge.box($v, TypeCalculate, System.Enum.toStringFn(TypeCalculate));}},{"a":2,"n":"typeMotion","t":4,"rt":TypeMotion,"sn":"typeMotion","box":function ($v) { return Bridge.box($v, TypeMotion, System.Enum.toStringFn(TypeMotion));}},{"a":2,"n":"typeTimeUnit","t":4,"rt":TypeTimeUnit,"sn":"typeTimeUnit","box":function ($v) { return Bridge.box($v, TypeTimeUnit, System.Enum.toStringFn(TypeTimeUnit));}}]}; }, $n);
    /*ItemController end.*/

    /*MapManager start.*/
    $m("MapManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"LoadCurrentMap","t":8,"sn":"LoadCurrentMap","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":MapManager,"sn":"Instance"},{"a":2,"n":"arrEnemies","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"arrEnemies"},{"a":2,"n":"boss","t":4,"rt":FighterController,"sn":"boss"},{"a":2,"n":"ground","t":4,"rt":$n[1].GameObject,"sn":"ground"},{"a":2,"n":"isMapBoss","t":4,"rt":$n[0].Boolean,"sn":"isMapBoss","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"level","t":4,"rt":$n[1].GameObject,"sn":"level"},{"a":2,"n":"listMultis","t":4,"rt":$n[2].List$1(UnityEngine.GameObject),"sn":"listMultis"},{"a":2,"n":"main","t":4,"rt":$n[1].Camera,"sn":"main"},{"a":2,"n":"pointEnd","t":4,"rt":$n[1].Transform,"sn":"pointEnd"},{"a":2,"n":"prefabEnemy","t":4,"rt":$n[1].GameObject,"sn":"prefabEnemy"},{"a":2,"n":"prefabMulti","t":4,"rt":$n[1].GameObject,"sn":"prefabMulti"},{"at":[new UnityEngine.HeaderAttribute("-----Multiplier-----")],"a":2,"n":"tfMulti","t":4,"rt":$n[1].Transform,"sn":"tfMulti"},{"a":2,"n":"uiManager","t":4,"rt":GameUIManager,"sn":"uiManager"}]}; }, $n);
    /*MapManager end.*/

    /*MultiController start.*/
    $m("MultiController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"LoadMulti","t":8,"pi":[{"n":"id","pt":$n[0].Int32,"ps":0}],"sn":"LoadMulti","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"bonus","t":4,"rt":$n[1].Material,"sn":"bonus"},{"a":2,"n":"ground","t":4,"rt":$n[1].GameObject,"sn":"ground"},{"a":2,"n":"textMulti","t":4,"rt":$n[6].TextMeshPro,"sn":"textMulti"},{"a":2,"n":"textMulti2","t":4,"rt":$n[6].TextMeshPro,"sn":"textMulti2"}]}; }, $n);
    /*MultiController end.*/

    /*PoolEntry start.*/
    $m("PoolEntry", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].GameObject],"pi":[{"n":"pfb","pt":$n[1].GameObject,"ps":0}],"sn":"ctor"},{"a":2,"n":"list","t":4,"rt":$n[2].List$1(UnityEngine.GameObject),"sn":"list"},{"a":2,"n":"prefab","t":4,"rt":$n[1].GameObject,"sn":"prefab"}]}; }, $n);
    /*PoolEntry end.*/

    /*SCR_Pool start.*/
    $m("SCR_Pool", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DeactivateAllObject","is":true,"t":8,"sn":"DeactivateAllObject","rt":$n[0].Void},{"a":2,"n":"Flush","is":true,"t":8,"sn":"Flush","rt":$n[0].Void},{"a":2,"n":"GetFreeObject","is":true,"t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0}],"sn":"GetFreeObject","rt":$n[1].GameObject,"p":[$n[1].GameObject]},{"a":1,"n":"GetFreeObjectFromEntry","is":true,"t":8,"pi":[{"n":"entry","pt":PoolEntry,"ps":0},{"n":"prefab","pt":$n[1].GameObject,"ps":1}],"sn":"GetFreeObjectFromEntry","rt":$n[1].GameObject,"p":[PoolEntry,$n[1].GameObject]},{"a":2,"n":"GetObjectList","is":true,"t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0}],"sn":"GetObjectList","rt":$n[2].List$1(UnityEngine.GameObject),"p":[$n[1].GameObject]},{"a":1,"n":"entries","is":true,"t":4,"rt":$n[2].List$1(PoolEntry),"sn":"entries"}]}; }, $n);
    /*SCR_Pool end.*/

    /*DispatcherType start.*/
    $m("DispatcherType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Early","is":true,"t":4,"rt":DispatcherType,"sn":"Early","box":function ($v) { return Bridge.box($v, DispatcherType, System.Enum.toStringFn(DispatcherType));}},{"a":2,"n":"Late","is":true,"t":4,"rt":DispatcherType,"sn":"Late","box":function ($v) { return Bridge.box($v, DispatcherType, System.Enum.toStringFn(DispatcherType));}},{"a":2,"n":"Normal","is":true,"t":4,"rt":DispatcherType,"sn":"Normal","box":function ($v) { return Bridge.box($v, DispatcherType, System.Enum.toStringFn(DispatcherType));}}]}; }, $n);
    /*DispatcherType end.*/

    /*EventDispatcher start.*/
    $m("EventDispatcher", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ClearAllListener","t":8,"sn":"ClearAllListener","rt":$n[0].Void},{"a":2,"n":"PostEvent","t":8,"pi":[{"n":"eventID","pt":$n[0].Int32,"ps":0},{"n":"param","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"PostEvent","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Object]},{"a":1,"n":"PostEvent","t":8,"pi":[{"n":"listener","pt":$n[2].Dictionary$2(System.Int32,Function),"ps":0},{"n":"eventID","pt":$n[0].Int32,"ps":1},{"n":"param","dv":null,"o":true,"pt":$n[0].Object,"ps":2}],"sn":"PostEvent$1","rt":$n[0].Void,"p":[$n[2].Dictionary$2(System.Int32,Function),$n[0].Int32,$n[0].Object]},{"a":1,"n":"RegisterListener","t":8,"pi":[{"n":"listener","pt":$n[2].Dictionary$2(System.Int32,Function),"ps":0},{"n":"eventID","pt":$n[0].Int32,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"RegisterListener$1","rt":$n[0].Void,"p":[$n[2].Dictionary$2(System.Int32,Function),$n[0].Int32,Function]},{"a":2,"n":"RegisterListener","t":8,"pi":[{"n":"eventID","pt":$n[0].Int32,"ps":0},{"n":"callback","pt":Function,"ps":1},{"n":"eventType","dv":1,"o":true,"pt":DispatcherType,"ps":2}],"sn":"RegisterListener","rt":$n[0].Void,"p":[$n[0].Int32,Function,DispatcherType]},{"a":2,"n":"RemoveListener","t":8,"pi":[{"n":"eventID","pt":$n[0].Int32,"ps":0},{"n":"callback","pt":Function,"ps":1}],"sn":"RemoveListener","rt":$n[0].Void,"p":[$n[0].Int32,Function]},{"a":1,"n":"RemoveListener","t":8,"pi":[{"n":"listener","pt":$n[2].Dictionary$2(System.Int32,Function),"ps":0},{"n":"eventID","pt":$n[0].Int32,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"RemoveListener$1","rt":$n[0].Void,"p":[$n[2].Dictionary$2(System.Int32,Function),$n[0].Int32,Function]},{"a":1,"n":"_earlyListeners","t":4,"rt":$n[2].Dictionary$2(System.Int32,Function),"sn":"_earlyListeners"},{"a":1,"n":"_lateListeners","t":4,"rt":$n[2].Dictionary$2(System.Int32,Function),"sn":"_lateListeners"},{"a":1,"n":"_normalListeners","t":4,"rt":$n[2].Dictionary$2(System.Int32,Function),"sn":"_normalListeners"}]}; }, $n);
    /*EventDispatcher end.*/

    /*EventDispatcherExtension start.*/
    $m("EventDispatcherExtension", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"PostEvent","is":true,"t":8,"pi":[{"n":"sender","pt":$n[1].MonoBehaviour,"ps":0},{"n":"eventID","pt":$n[0].Int32,"ps":1}],"sn":"PostEvent","rt":$n[0].Void,"p":[$n[1].MonoBehaviour,$n[0].Int32]},{"a":2,"n":"PostEvent","is":true,"t":8,"pi":[{"n":"listener","pt":$n[1].MonoBehaviour,"ps":0},{"n":"eventID","pt":$n[0].Int32,"ps":1},{"n":"param","pt":$n[0].Object,"ps":2}],"sn":"PostEvent$1","rt":$n[0].Void,"p":[$n[1].MonoBehaviour,$n[0].Int32,$n[0].Object]},{"a":2,"n":"RegisterListener","is":true,"t":8,"pi":[{"n":"listener","pt":$n[1].MonoBehaviour,"ps":0},{"n":"eventID","pt":$n[0].Int32,"ps":1},{"n":"callback","pt":Function,"ps":2},{"n":"eventType","dv":1,"o":true,"pt":DispatcherType,"ps":3}],"sn":"RegisterListener","rt":$n[0].Void,"p":[$n[1].MonoBehaviour,$n[0].Int32,Function,DispatcherType]}]}; }, $n);
    /*EventDispatcherExtension end.*/

    /*EventID start.*/
    $m("EventID", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnAttackBoss","is":true,"t":4,"rt":EventID,"sn":"OnAttackBoss","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}},{"a":2,"n":"OnChangeDistanceHitbox","is":true,"t":4,"rt":EventID,"sn":"OnChangeDistanceHitbox","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}},{"a":2,"n":"OnCharAttackMelee","is":true,"t":4,"rt":EventID,"sn":"OnCharAttackMelee","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}},{"a":2,"n":"OnCharRun","is":true,"t":4,"rt":EventID,"sn":"OnCharRun","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}},{"a":2,"n":"OnDefeat","is":true,"t":4,"rt":EventID,"sn":"OnDefeat","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}},{"a":2,"n":"OnEnemyLoadSkin","is":true,"t":4,"rt":EventID,"sn":"OnEnemyLoadSkin","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}},{"a":2,"n":"OnFightBegin","is":true,"t":4,"rt":EventID,"sn":"OnFightBegin","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}},{"a":2,"n":"OnFightDefeat","is":true,"t":4,"rt":EventID,"sn":"OnFightDefeat","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}},{"a":2,"n":"OnIncreaseAnim","is":true,"t":4,"rt":EventID,"sn":"OnIncreaseAnim","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}},{"a":2,"n":"OnLoadSkin","is":true,"t":4,"rt":EventID,"sn":"OnLoadSkin","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}},{"a":2,"n":"OnShowFxDown","is":true,"t":4,"rt":EventID,"sn":"OnShowFxDown","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}},{"a":2,"n":"OnShowFxHitted","is":true,"t":4,"rt":EventID,"sn":"OnShowFxHitted","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}},{"a":2,"n":"OnShowFxUp","is":true,"t":4,"rt":EventID,"sn":"OnShowFxUp","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}},{"a":2,"n":"OnStopAllCoroutines","is":true,"t":4,"rt":EventID,"sn":"OnStopAllCoroutines","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}},{"a":2,"n":"OnTurnOffAllSkin","is":true,"t":4,"rt":EventID,"sn":"OnTurnOffAllSkin","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}},{"a":2,"n":"OnVictory","is":true,"t":4,"rt":EventID,"sn":"OnVictory","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}}]}; }, $n);
    /*EventID end.*/

    /*LazySingleton$1 start.*/
    $m("LazySingleton$1", function (T) { return {"att":1048705,"a":2,"m":[{"a":3,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"v":true,"a":3,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":T,"g":{"a":2,"n":"get_Instance","t":8,"rt":T,"fg":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"instance","is":true,"t":4,"rt":T,"sn":"instance"},{"a":1,"n":"singletonDestroyed","is":true,"t":4,"rt":$n[0].Boolean,"sn":"singletonDestroyed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*LazySingleton$1 end.*/

    /*TransformExtend start.*/
    $m("TransformExtend", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"GetChilds","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0}],"sn":"GetChilds","rt":$n[2].List$1(UnityEngine.Transform),"p":[$n[1].Transform]}]}; }, $n);
    /*TransformExtend end.*/

    /*PanelFighting start.*/
    $m("PanelFighting", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":PanelFighting,"sn":"Instance"},{"a":2,"n":"hpBarEnemy","t":4,"rt":$n[1].GameObject,"sn":"hpBarEnemy"},{"a":2,"n":"hpBarPlayer","t":4,"rt":$n[1].GameObject,"sn":"hpBarPlayer"},{"a":2,"n":"isFighting","t":4,"rt":$n[0].Boolean,"sn":"isFighting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"skins","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"skins"}]}; }, $n);
    /*PanelFighting end.*/

    /*Direction start.*/
    $m("Direction", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Forward","is":true,"t":4,"rt":Direction,"sn":"Forward","box":function ($v) { return Bridge.box($v, Direction, System.Enum.toStringFn(Direction));}},{"a":2,"n":"Left","is":true,"t":4,"rt":Direction,"sn":"Left","box":function ($v) { return Bridge.box($v, Direction, System.Enum.toStringFn(Direction));}},{"a":2,"n":"Right","is":true,"t":4,"rt":Direction,"sn":"Right","box":function ($v) { return Bridge.box($v, Direction, System.Enum.toStringFn(Direction));}}]}; }, $n);
    /*Direction end.*/

    /*PlayerController start.*/
    $m("PlayerController", function () { return {"nested":[PlayerController.DataCharacter],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ChangeSpeed","t":8,"pi":[{"n":"v_start","pt":$n[0].Int32,"ps":0},{"n":"v_end","pt":$n[0].Int32,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"ChangeSpeed","rt":$n[5].IEnumerator,"p":[$n[0].Int32,$n[0].Int32,$n[0].Single]},{"a":2,"n":"ClickToAttack","t":8,"sn":"ClickToAttack","rt":$n[0].Void},{"a":1,"n":"CoStartFight","t":8,"pi":[{"n":"delay","pt":$n[0].Single,"ps":0}],"sn":"CoStartFight","rt":$n[5].IEnumerator,"p":[$n[0].Single]},{"a":1,"n":"CoWaitGetItem","t":8,"pi":[{"n":"delay","pt":$n[0].Single,"ps":0},{"n":"obj","pt":$n[1].GameObject,"ps":1}],"sn":"CoWaitGetItem","rt":$n[5].IEnumerator,"p":[$n[0].Single,$n[1].GameObject]},{"a":2,"n":"FightingBoss","t":8,"sn":"FightingBoss","rt":$n[0].Void},{"a":2,"n":"GetItem","t":8,"pi":[{"n":"item","pt":ItemController,"ps":0}],"sn":"GetItem","rt":$n[0].Void,"p":[ItemController]},{"a":2,"n":"GetTimeMoveMulti","t":8,"pi":[{"n":"multiID","pt":$n[0].Int32,"ps":0}],"sn":"GetTimeMoveMulti","rt":$n[0].Single,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetX3Item","t":8,"sn":"GetX3Item","rt":$n[0].Void},{"a":2,"n":"InitCharacter","t":8,"sn":"InitCharacter","rt":$n[0].Void},{"a":2,"n":"IsMouseOverUI","t":8,"sn":"IsMouseOverUI","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsPointerOverUIObject","t":8,"sn":"IsPointerOverUIObject","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LoadSkinByScore","t":8,"sn":"LoadSkinByScore","rt":$n[0].Void},{"a":2,"n":"MultiID","t":8,"sn":"MultiID","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"ShowCelebration","t":8,"sn":"ShowCelebration","rt":$n[0].Void},{"a":2,"n":"ShowEnding","t":8,"sn":"ShowEnding","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TapToAttackMenu","t":8,"sn":"TapToAttackMenu","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"UpdateStartScore","t":8,"sn":"UpdateStartScore","rt":$n[0].Void},{"a":2,"n":"UpdateTextScore","t":8,"pi":[{"n":"color","pt":$n[1].Color,"ps":0},{"n":"multiply","pt":$n[0].Single,"ps":1}],"sn":"UpdateTextScore","rt":$n[0].Void,"p":[$n[1].Color,$n[0].Single]},{"a":2,"n":"DistanceScale","t":4,"rt":$n[0].Single,"sn":"DistanceScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Instance","is":true,"t":4,"rt":PlayerController,"sn":"Instance"},{"a":2,"n":"MaxDistance","t":4,"rt":$n[0].Single,"sn":"MaxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ScreenSwipeScale","t":4,"rt":$n[0].Single,"sn":"ScreenSwipeScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("-----Character-----")],"a":2,"n":"arrCharacters","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"arrCharacters"},{"a":1,"n":"borderX","t":4,"rt":$n[0].Single,"sn":"borderX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"boss","t":4,"rt":FighterController,"sn":"boss"},{"a":2,"n":"cloneChar","t":4,"rt":$n[1].GameObject,"sn":"cloneChar"},{"a":2,"n":"currentChar","t":4,"rt":$n[1].GameObject,"sn":"currentChar"},{"a":2,"n":"currentCharID","t":4,"rt":$n[0].Int32,"sn":"currentCharID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"currentEnemySkinID","t":4,"rt":$n[0].Int32,"sn":"currentEnemySkinID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"currentMultiID","t":4,"rt":$n[0].Int32,"sn":"currentMultiID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"currentScore","t":4,"rt":$n[0].Int32,"sn":"currentScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"dataCharacters","t":4,"rt":$n[2].List$1(PlayerController.DataCharacter),"sn":"dataCharacters"},{"at":[new UnityEngine.HeaderAttribute("-----FX-----")],"a":2,"n":"fx_confetti","t":4,"rt":$n[1].ParticleSystem,"sn":"fx_confetti"},{"a":2,"n":"isCelebrate","t":4,"rt":$n[0].Boolean,"sn":"isCelebrate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isEnding","t":4,"rt":$n[0].Boolean,"sn":"isEnding","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isGetItem","t":4,"rt":$n[0].Boolean,"sn":"isGetItem","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isPress","t":4,"rt":$n[0].Boolean,"sn":"isPress","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isStart","t":4,"rt":$n[0].Boolean,"sn":"isStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isTap","t":4,"rt":$n[0].Boolean,"sn":"isTap","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isTurn","t":4,"rt":$n[0].Boolean,"sn":"isTurn","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"level","t":4,"rt":$n[0].Int32,"sn":"level","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"listCharAnim","t":4,"rt":$n[2].List$1(UnityEngine.Animator),"sn":"listCharAnim"},{"a":2,"n":"listFXtransformChar","t":4,"rt":$n[2].List$1(UnityEngine.ParticleSystem),"sn":"listFXtransformChar"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mainCamera","t":4,"rt":$n[1].GameObject,"sn":"mainCamera"},{"a":1,"n":"minScore","t":4,"rt":$n[0].Int32,"sn":"minScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"mouseLastPosX","t":4,"rt":$n[0].Single,"sn":"mouseLastPosX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("-----Movement-----")],"a":2,"n":"moveSpeed","t":4,"rt":$n[0].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"panelTap","t":4,"rt":$n[1].GameObject,"sn":"panelTap"},{"a":2,"n":"player","t":4,"rt":FighterController,"sn":"player"},{"at":[new UnityEngine.HeaderAttribute("-----Animation-----")],"a":2,"n":"playerAnim","t":4,"rt":$n[1].Animator,"sn":"playerAnim"},{"a":2,"n":"pointEnd","t":4,"rt":$n[1].Transform,"sn":"pointEnd"},{"a":2,"n":"sensitivity","t":4,"rt":$n[0].Single,"sn":"sensitivity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"skinID","t":4,"rt":$n[0].Int32,"sn":"skinID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"tapToAttackHint","t":4,"rt":$n[1].GameObject,"sn":"tapToAttackHint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"textMultiplier","t":4,"rt":$n[4].Text,"sn":"textMultiplier"},{"at":[new UnityEngine.HeaderAttribute("-----UI-----"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"textScore","t":4,"rt":$n[4].Text,"sn":"textScore"}]}; }, $n);
    /*PlayerController end.*/

    /*PlayerController+DataCharacter start.*/
    $m("PlayerController.DataCharacter", function () { return {"td":PlayerController,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"dataCharacter","t":4,"rt":PlayerController.DataCharacter,"sn":"dataCharacter"},{"a":2,"n":"dps","t":4,"rt":$n[0].Int32,"sn":"dps","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"hp","t":4,"rt":$n[0].Int32,"sn":"hp","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"id","t":4,"rt":$n[0].Int32,"sn":"id","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"time","t":4,"rt":$n[0].Single,"sn":"time","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PlayerController+DataCharacter end.*/

    /*PopupEnding start.*/
    $m("PopupEnding", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ButtonDirectToStore","t":8,"sn":"ButtonDirectToStore","rt":$n[0].Void},{"a":2,"n":"Close","t":8,"sn":"Close","rt":$n[0].Void},{"a":2,"n":"OnClickNextLevel","t":8,"sn":"OnClickNextLevel","rt":$n[0].Void},{"a":2,"n":"Open","t":8,"sn":"Open","rt":$n[0].Void},{"a":2,"n":"ShowSkinReward","t":8,"sn":"ShowSkinReward","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":PopupEnding,"sn":"Instance"},{"a":2,"n":"animCurveNeedle","t":4,"rt":pc.AnimationCurve,"sn":"animCurveNeedle"},{"a":2,"n":"buttonNextLevel","t":4,"rt":$n[4].Button,"sn":"buttonNextLevel"},{"a":1,"n":"ctaClick","t":4,"rt":$n[0].Int32,"sn":"ctaClick","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"fillSkinReward","t":4,"rt":$n[4].Image,"sn":"fillSkinReward"},{"at":[new UnityEngine.HeaderAttribute("-----Skin Reward-----")],"a":2,"n":"goSkinReward","t":4,"rt":$n[1].GameObject,"sn":"goSkinReward"},{"a":2,"n":"manager","t":4,"rt":GameManager,"sn":"manager"},{"a":2,"n":"rectTransformNeedle","t":4,"rt":$n[1].RectTransform,"sn":"rectTransformNeedle"},{"a":2,"n":"textDefaultReward","t":4,"rt":$n[4].Text,"sn":"textDefaultReward"},{"a":2,"n":"textFillReward","t":4,"rt":$n[4].Text,"sn":"textFillReward"},{"a":2,"n":"textTotalReward","t":4,"rt":$n[4].Text,"sn":"textTotalReward"},{"a":2,"n":"totalReward","t":4,"rt":$n[0].Int32,"sn":"totalReward","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"tweenNeedleRotate","t":4,"rt":$n[7].Tween,"sn":"tweenNeedleRotate"}]}; }, $n);
    /*PopupEnding end.*/

    /*SoundController start.*/
    $m("SoundController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DelayLoadVolumeMusic","t":8,"sn":"DelayLoadVolumeMusic","rt":$n[5].IEnumerator},{"a":2,"n":"PlayMusicBgr","t":8,"sn":"PlayMusicBgr","rt":$n[0].Void},{"a":2,"n":"PlaySoundByClip","t":8,"pi":[{"n":"audio","pt":$n[1].AudioClip,"ps":0}],"sn":"PlaySoundByClip","rt":$n[0].Void,"p":[$n[1].AudioClip]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":SoundController,"sn":"Instance"},{"a":2,"n":"audioMusic","t":4,"rt":$n[1].AudioSource,"sn":"audioMusic"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"audioSound","t":4,"rt":$n[1].AudioSource,"sn":"audioSound"},{"a":1,"n":"delayVolume","t":4,"rt":$n[5].IEnumerator,"sn":"delayVolume"},{"a":2,"n":"sound_bravo","t":4,"rt":$n[1].AudioClip,"sn":"sound_bravo"},{"a":2,"n":"sound_click_button","t":4,"rt":$n[1].AudioClip,"sn":"sound_click_button"},{"at":[new UnityEngine.HeaderAttribute("-----Attack Sound-----")],"a":2,"n":"sound_melee","t":4,"rt":$n[1].AudioClip,"sn":"sound_melee"},{"a":2,"n":"sound_upgrade","t":4,"rt":$n[1].AudioClip,"sn":"sound_upgrade"},{"a":2,"n":"volumeMusic","t":4,"rt":$n[0].Single,"sn":"volumeMusic","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SoundController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[8].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[8].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[8].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[8].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[7].Sequence,"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[10].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[7].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[10].Path,$n[0].Single,$n[7].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[7].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[7].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[7].PathType,$n[7].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"towards","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[7].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[9].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[7].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[10].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[7].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[10].Path,$n[0].Single,$n[7].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[7].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[7].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[7].PathType,$n[7].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[7].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[9].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[7].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[7].Sequence,"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[10].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[7].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[10].Path,$n[0].Single,$n[7].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[7].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[7].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[7].PathType,$n[7].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[10].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[7].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[10].Path,$n[0].Single,$n[7].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[7].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[7].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[7].PathType,$n[7].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[7].Tweener,"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"gradient","pt":$n[1].Gradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[7].Sequence,"p":[$n[1].SpriteRenderer,$n[1].Gradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[7].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[7].Tweener,"p":[$n[4].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[7].Tweener,"p":[$n[4].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[7].Tweener,"p":[$n[4].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[11].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[9].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[4].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[11].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"gradient","pt":$n[1].Gradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[7].Sequence,"p":[$n[4].Image,$n[1].Gradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[7].Tweener,"p":[$n[4].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[7].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[7].Tweener,"p":[$n[4].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[7].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6}],"sn":"DOShakeAnchorPos","rt":$n[7].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6}],"sn":"DOShakeAnchorPos$1","rt":$n[7].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"center","pt":$n[1].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[7].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[9].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[4].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[7].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[7].Tweener,"p":[$n[4].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[7].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":$n[1].Gradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[7].Sequence,"p":[$n[1].Material,$n[1].Gradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":$n[1].Gradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[7].Sequence,"p":[$n[1].Material,$n[1].Gradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[7].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[7].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[7].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[7].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[7].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[7].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[7].DOTweenCYInstruction.WaitForCompletion,$n[7].DOTweenCYInstruction.WaitForRewind,$n[7].DOTweenCYInstruction.WaitForKill,$n[7].DOTweenCYInstruction.WaitForElapsedLoops,$n[7].DOTweenCYInstruction.WaitForPosition,$n[7].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[7].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[7].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[10].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[7].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[10].Path,$n[0].Single,$n[7].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[12].PathOptions,"ps":0},{"n":"t","pt":$n[7].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[12].PathOptions,$n[7].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*EpicToonFX.ETFXButtonScript start.*/
    $m("EpicToonFX.ETFXButtonScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"getProjectileNames","t":8,"sn":"getProjectileNames","rt":$n[0].Void},{"a":2,"n":"overButton","t":8,"sn":"overButton","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Button","t":4,"rt":$n[1].GameObject,"sn":"Button"},{"a":1,"n":"MyButtonText","t":4,"rt":$n[4].Text,"sn":"MyButtonText"},{"a":2,"n":"buttonsDistance","t":4,"rt":$n[0].Single,"sn":"buttonsDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"buttonsSizeX","t":4,"rt":$n[0].Single,"sn":"buttonsSizeX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"buttonsSizeY","t":4,"rt":$n[0].Single,"sn":"buttonsSizeY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"buttonsX","t":4,"rt":$n[0].Single,"sn":"buttonsX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"buttonsY","t":4,"rt":$n[0].Single,"sn":"buttonsY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"effectScript","t":4,"rt":$n[13].ETFXFireProjectile,"sn":"effectScript"},{"a":1,"n":"projectileParticleName","t":4,"rt":$n[0].String,"sn":"projectileParticleName"},{"a":1,"n":"projectileScript","t":4,"rt":ETFXProjectileScript,"sn":"projectileScript"}]}; }, $n);
    /*EpicToonFX.ETFXButtonScript end.*/

    /*EpicToonFX.ETFXFireProjectile start.*/
    $m("EpicToonFX.ETFXFireProjectile", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AdjustSpeed","t":8,"pi":[{"n":"newSpeed","pt":$n[0].Single,"ps":0}],"sn":"AdjustSpeed","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"nextEffect","t":8,"sn":"nextEffect","rt":$n[0].Void},{"a":2,"n":"previousEffect","t":8,"sn":"previousEffect","rt":$n[0].Void},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"currentProjectile","t":4,"rt":$n[0].Int32,"sn":"currentProjectile","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"hit","t":4,"rt":$n[1].RaycastHit,"sn":"hit"},{"a":2,"n":"projectiles","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"projectiles"},{"a":1,"n":"selectedProjectileButton","t":4,"rt":$n[13].ETFXButtonScript,"sn":"selectedProjectileButton"},{"a":2,"n":"spawnPosition","t":4,"rt":$n[1].Transform,"sn":"spawnPosition"},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*EpicToonFX.ETFXFireProjectile end.*/

    /*EpicToonFX.ETFXLoopScript start.*/
    $m("EpicToonFX.ETFXLoopScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"EffectLoop","t":8,"sn":"EffectLoop","rt":$n[5].IEnumerator},{"a":2,"n":"PlayEffect","t":8,"sn":"PlayEffect","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"chosenEffect","t":4,"rt":$n[1].GameObject,"sn":"chosenEffect"},{"a":2,"n":"loopTimeLimit","t":4,"rt":$n[0].Single,"sn":"loopTimeLimit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Spawn without")],"a":2,"n":"spawnWithoutLight","t":4,"rt":$n[0].Boolean,"sn":"spawnWithoutLight","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"spawnWithoutSound","t":4,"rt":$n[0].Boolean,"sn":"spawnWithoutSound","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*EpicToonFX.ETFXLoopScript end.*/

    /*EpicToonFX.ETFXMouseOrbit start.*/
    $m("EpicToonFX.ETFXMouseOrbit", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ClampAngle","is":true,"t":8,"pi":[{"n":"angle","pt":$n[0].Single,"ps":0},{"n":"min","pt":$n[0].Single,"ps":1},{"n":"max","pt":$n[0].Single,"ps":2}],"sn":"ClampAngle","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"distance","t":4,"rt":$n[0].Single,"sn":"distance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"distanceMax","t":4,"rt":$n[0].Single,"sn":"distanceMax","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"distanceMin","t":4,"rt":$n[0].Single,"sn":"distanceMin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rotationXAxis","t":4,"rt":$n[0].Single,"sn":"rotationXAxis","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rotationYAxis","t":4,"rt":$n[0].Single,"sn":"rotationYAxis","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"smoothTime","t":4,"rt":$n[0].Single,"sn":"smoothTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"target","t":4,"rt":$n[1].Transform,"sn":"target"},{"a":1,"n":"velocityX","t":4,"rt":$n[0].Single,"sn":"velocityX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"velocityY","t":4,"rt":$n[0].Single,"sn":"velocityY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"xSpeed","t":4,"rt":$n[0].Single,"sn":"xSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"yMaxLimit","t":4,"rt":$n[0].Single,"sn":"yMaxLimit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"yMinLimit","t":4,"rt":$n[0].Single,"sn":"yMinLimit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ySpeed","t":4,"rt":$n[0].Single,"sn":"ySpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*EpicToonFX.ETFXMouseOrbit end.*/

    /*EpicToonFX.ETFXLightFade start.*/
    $m("EpicToonFX.ETFXLightFade", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"initIntensity","t":4,"rt":$n[0].Single,"sn":"initIntensity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"killAfterLife","t":4,"rt":$n[0].Boolean,"sn":"killAfterLife","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"li","t":4,"rt":$n[1].Light,"sn":"li"},{"at":[new UnityEngine.HeaderAttribute("Seconds to dim the light")],"a":2,"n":"life","t":4,"rt":$n[0].Single,"sn":"life","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*EpicToonFX.ETFXLightFade end.*/

    /*EpicToonFX.ETFXPitchRandomizer start.*/
    $m("EpicToonFX.ETFXPitchRandomizer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"randomPercent","t":4,"rt":$n[0].Single,"sn":"randomPercent","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*EpicToonFX.ETFXPitchRandomizer end.*/

    /*EpicToonFX.ETFXRotation start.*/
    $m("EpicToonFX.ETFXRotation", function () { return {"nested":[$n[13].ETFXRotation.spaceEnum],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"rotateSpace","t":4,"rt":$n[13].ETFXRotation.spaceEnum,"sn":"rotateSpace","box":function ($v) { return Bridge.box($v, EpicToonFX.ETFXRotation.spaceEnum, System.Enum.toStringFn(EpicToonFX.ETFXRotation.spaceEnum));}},{"at":[new UnityEngine.HeaderAttribute("Rotate axises by degrees per second")],"a":2,"n":"rotateVector","t":4,"rt":$n[1].Vector3,"sn":"rotateVector"}]}; }, $n);
    /*EpicToonFX.ETFXRotation end.*/

    /*EpicToonFX.ETFXRotation+spaceEnum start.*/
    $m("EpicToonFX.ETFXRotation.spaceEnum", function () { return {"td":$n[13].ETFXRotation,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Local","is":true,"t":4,"rt":$n[13].ETFXRotation.spaceEnum,"sn":"Local","box":function ($v) { return Bridge.box($v, EpicToonFX.ETFXRotation.spaceEnum, System.Enum.toStringFn(EpicToonFX.ETFXRotation.spaceEnum));}},{"a":2,"n":"World","is":true,"t":4,"rt":$n[13].ETFXRotation.spaceEnum,"sn":"World","box":function ($v) { return Bridge.box($v, EpicToonFX.ETFXRotation.spaceEnum, System.Enum.toStringFn(EpicToonFX.ETFXRotation.spaceEnum));}}]}; }, $n);
    /*EpicToonFX.ETFXRotation+spaceEnum end.*/

});
