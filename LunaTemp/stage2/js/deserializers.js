var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointSpring' )
  var i697 = data
  i696.spring = i697[0]
  i696.damper = i697[1]
  i696.targetPosition = i697[2]
  return i696
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.JointMotor' )
  var i699 = data
  i698.m_TargetVelocity = i699[0]
  i698.m_Force = i699[1]
  i698.m_FreeSpin = i699[2]
  return i698
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointLimits' )
  var i701 = data
  i700.m_Min = i701[0]
  i700.m_Max = i701[1]
  i700.m_Bounciness = i701[2]
  i700.m_BounceMinVelocity = i701[3]
  i700.m_ContactDistance = i701[4]
  i700.minBounce = i701[5]
  i700.maxBounce = i701[6]
  return i700
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointDrive' )
  var i703 = data
  i702.m_PositionSpring = i703[0]
  i702.m_PositionDamper = i703[1]
  i702.m_MaximumForce = i703[2]
  return i702
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i705 = data
  i704.m_Spring = i705[0]
  i704.m_Damper = i705[1]
  return i704
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i707 = data
  i706.m_Limit = i707[0]
  i706.m_Bounciness = i707[1]
  i706.m_ContactDistance = i707[2]
  return i706
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i709 = data
  i708.m_ExtremumSlip = i709[0]
  i708.m_ExtremumValue = i709[1]
  i708.m_AsymptoteSlip = i709[2]
  i708.m_AsymptoteValue = i709[3]
  i708.m_Stiffness = i709[4]
  return i708
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i711 = data
  i710.m_LowerAngle = i711[0]
  i710.m_UpperAngle = i711[1]
  return i710
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i713 = data
  i712.m_MotorSpeed = i713[0]
  i712.m_MaximumMotorTorque = i713[1]
  return i712
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i715 = data
  i714.m_DampingRatio = i715[0]
  i714.m_Frequency = i715[1]
  i714.m_Angle = i715[2]
  return i714
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i717 = data
  i716.m_LowerTranslation = i717[0]
  i716.m_UpperTranslation = i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i718 = root || new pc.UnityMaterial()
  var i719 = data
  i718.name = i719[0]
  request.r(i719[1], i719[2], 0, i718, 'shader')
  i718.renderQueue = i719[3]
  i718.enableInstancing = !!i719[4]
  var i721 = i719[5]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i721[i + 0]) );
  }
  i718.floatParameters = i720
  var i723 = i719[6]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i723[i + 0]) );
  }
  i718.colorParameters = i722
  var i725 = i719[7]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i725[i + 0]) );
  }
  i718.vectorParameters = i724
  var i727 = i719[8]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i727[i + 0]) );
  }
  i718.textureParameters = i726
  var i729 = i719[9]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i729[i + 0]) );
  }
  i718.materialFlags = i728
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i733 = data
  i732.name = i733[0]
  i732.value = i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i737 = data
  i736.name = i737[0]
  i736.value = new pc.Color(i737[1], i737[2], i737[3], i737[4])
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i741 = data
  i740.name = i741[0]
  i740.value = new pc.Vec4( i741[1], i741[2], i741[3], i741[4] )
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i745 = data
  i744.name = i745[0]
  request.r(i745[1], i745[2], 0, i744, 'value')
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i749 = data
  i748.name = i749[0]
  i748.enabled = !!i749[1]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i751 = data
  i750.name = i751[0]
  i750.width = i751[1]
  i750.height = i751[2]
  i750.mipmapCount = i751[3]
  i750.anisoLevel = i751[4]
  i750.filterMode = i751[5]
  i750.hdr = !!i751[6]
  i750.format = i751[7]
  i750.wrapMode = i751[8]
  i750.alphaIsTransparency = !!i751[9]
  i750.alphaSource = i751[10]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i753 = data
  i752.position = new pc.Vec3( i753[0], i753[1], i753[2] )
  i752.scale = new pc.Vec3( i753[3], i753[4], i753[5] )
  i752.rotation = new pc.Quat(i753[6], i753[7], i753[8], i753[9])
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i755 = data
  i754.name = i755[0]
  i754.tag = i755[1]
  i754.enabled = !!i755[2]
  i754.isStatic = !!i755[3]
  i754.layer = i755[4]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i757 = data
  i756.enabled = !!i757[0]
  request.r(i757[1], i757[2], 0, i756, 'sharedMaterial')
  var i759 = i757[3]
  var i758 = []
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 2, i758, '')
  }
  i756.sharedMaterials = i758
  i756.receiveShadows = !!i757[4]
  i756.shadowCastingMode = i757[5]
  i756.sortingLayerID = i757[6]
  i756.sortingOrder = i757[7]
  i756.lightmapIndex = i757[8]
  i756.lightmapSceneIndex = i757[9]
  i756.lightmapScaleOffset = new pc.Vec4( i757[10], i757[11], i757[12], i757[13] )
  i756.lightProbeUsage = i757[14]
  i756.reflectionProbeUsage = i757[15]
  request.r(i757[16], i757[17], 0, i756, 'sharedMesh')
  var i761 = i757[18]
  var i760 = []
  for(var i = 0; i < i761.length; i += 2) {
  request.r(i761[i + 0], i761[i + 1], 2, i760, '')
  }
  i756.bones = i760
  i756.updateWhenOffscreen = !!i757[19]
  i756.localBounds = i757[20]
  request.r(i757[21], i757[22], 0, i756, 'rootBone')
  var i763 = i757[23]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i763[i + 0]) );
  }
  i756.blendShapesWeights = i762
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i771 = data
  i770.weight = i771[0]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i773 = data
  i772.name = i773[0]
  i772.halfPrecision = !!i773[1]
  i772.vertexCount = i773[2]
  i772.aabb = i773[3]
  var i775 = i773[4]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( !!i775[i + 0] );
  }
  i772.streams = i774
  i772.vertices = i773[5]
  var i777 = i773[6]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i777[i + 0]) );
  }
  i772.subMeshes = i776
  var i779 = i773[7]
  var i778 = []
  for(var i = 0; i < i779.length; i += 16) {
    i778.push( new pc.Mat4().setData(i779[i + 0], i779[i + 1], i779[i + 2], i779[i + 3],  i779[i + 4], i779[i + 5], i779[i + 6], i779[i + 7],  i779[i + 8], i779[i + 9], i779[i + 10], i779[i + 11],  i779[i + 12], i779[i + 13], i779[i + 14], i779[i + 15]) );
  }
  i772.bindposes = i778
  var i781 = i773[8]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i781[i + 0]) );
  }
  i772.blendShapes = i780
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i787 = data
  i786.triangles = i787[0]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i793 = data
  i792.name = i793[0]
  var i795 = i793[1]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i795[i + 0]) );
  }
  i792.frames = i794
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i797 = data
  i796.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i797[0], i796.main)
  i796.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i797[1], i796.colorBySpeed)
  i796.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i797[2], i796.colorOverLifetime)
  i796.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i797[3], i796.emission)
  i796.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i797[4], i796.rotationBySpeed)
  i796.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i797[5], i796.rotationOverLifetime)
  i796.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i797[6], i796.shape)
  i796.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i797[7], i796.sizeBySpeed)
  i796.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i797[8], i796.sizeOverLifetime)
  i796.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i797[9], i796.textureSheetAnimation)
  i796.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i797[10], i796.velocityOverLifetime)
  i796.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i797[11], i796.noise)
  i796.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i797[12], i796.inheritVelocity)
  i796.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i797[13], i796.forceOverLifetime)
  i796.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i797[14], i796.limitVelocityOverLifetime)
  i796.useAutoRandomSeed = !!i797[15]
  i796.randomSeed = i797[16]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemMain()
  var i799 = data
  i798.duration = i799[0]
  i798.loop = !!i799[1]
  i798.prewarm = !!i799[2]
  i798.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.startDelay)
  i798.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[4], i798.startLifetime)
  i798.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[5], i798.startSpeed)
  i798.startSize3D = !!i799[6]
  i798.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[7], i798.startSizeX)
  i798.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[8], i798.startSizeY)
  i798.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[9], i798.startSizeZ)
  i798.startRotation3D = !!i799[10]
  i798.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[11], i798.startRotationX)
  i798.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[12], i798.startRotationY)
  i798.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[13], i798.startRotationZ)
  i798.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i799[14], i798.startColor)
  i798.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[15], i798.gravityModifier)
  i798.simulationSpace = i799[16]
  request.r(i799[17], i799[18], 0, i798, 'customSimulationSpace')
  i798.simulationSpeed = i799[19]
  i798.useUnscaledTime = !!i799[20]
  i798.scalingMode = i799[21]
  i798.playOnAwake = !!i799[22]
  i798.maxParticles = i799[23]
  i798.emitterVelocityMode = i799[24]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i800 = root || new pc.MinMaxCurve()
  var i801 = data
  i800.mode = i801[0]
  i800.curveMin = new pc.AnimationCurve( { keys_flow: i801[1] } )
  i800.curveMax = new pc.AnimationCurve( { keys_flow: i801[2] } )
  i800.curveMultiplier = i801[3]
  i800.constantMin = i801[4]
  i800.constantMax = i801[5]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i802 = root || new pc.MinMaxGradient()
  var i803 = data
  i802.mode = i803[0]
  i802.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i803[1], i802.gradientMin)
  i802.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i803[2], i802.gradientMax)
  i802.colorMin = new pc.Color(i803[3], i803[4], i803[5], i803[6])
  i802.colorMax = new pc.Color(i803[7], i803[8], i803[9], i803[10])
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i805 = data
  i804.mode = i805[0]
  var i807 = i805[1]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i807[i + 0]) );
  }
  i804.colorKeys = i806
  var i809 = i805[2]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i809[i + 0]) );
  }
  i804.alphaKeys = i808
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemColorBySpeed()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i811[1], i810.color)
  i810.range = new pc.Vec2( i811[2], i811[3] )
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i815 = data
  i814.color = new pc.Color(i815[0], i815[1], i815[2], i815[3])
  i814.time = i815[4]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i819 = data
  i818.alpha = i819[0]
  i818.time = i819[1]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemColorOverLifetime()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i821[1], i820.color)
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemEmitter()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[1], i822.rateOverTime)
  i822.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.rateOverDistance)
  var i825 = i823[3]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i825[i + 0]) );
  }
  i822.bursts = i824
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemBurst()
  var i829 = data
  i828.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[0], i828.count)
  i828.cycleCount = i829[1]
  i828.minCount = i829[2]
  i828.maxCount = i829[3]
  i828.repeatInterval = i829[4]
  i828.time = i829[5]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemRotationBySpeed()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[1], i830.x)
  i830.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[2], i830.y)
  i830.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[3], i830.z)
  i830.separateAxes = !!i831[4]
  i830.range = new pc.Vec2( i831[5], i831[6] )
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemRotationOverLifetime()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[1], i832.x)
  i832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[2], i832.y)
  i832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[3], i832.z)
  i832.separateAxes = !!i833[4]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemShape()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.shapeType = i835[1]
  i834.randomDirectionAmount = i835[2]
  i834.sphericalDirectionAmount = i835[3]
  i834.randomPositionAmount = i835[4]
  i834.alignToDirection = !!i835[5]
  i834.radius = i835[6]
  i834.radiusMode = i835[7]
  i834.radiusSpread = i835[8]
  i834.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[9], i834.radiusSpeed)
  i834.radiusThickness = i835[10]
  i834.angle = i835[11]
  i834.length = i835[12]
  i834.boxThickness = new pc.Vec3( i835[13], i835[14], i835[15] )
  i834.meshShapeType = i835[16]
  request.r(i835[17], i835[18], 0, i834, 'mesh')
  request.r(i835[19], i835[20], 0, i834, 'meshRenderer')
  request.r(i835[21], i835[22], 0, i834, 'skinnedMeshRenderer')
  i834.useMeshMaterialIndex = !!i835[23]
  i834.meshMaterialIndex = i835[24]
  i834.useMeshColors = !!i835[25]
  i834.normalOffset = i835[26]
  i834.arc = i835[27]
  i834.arcMode = i835[28]
  i834.arcSpread = i835[29]
  i834.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[30], i834.arcSpeed)
  i834.donutRadius = i835[31]
  i834.position = new pc.Vec3( i835[32], i835[33], i835[34] )
  i834.rotation = new pc.Vec3( i835[35], i835[36], i835[37] )
  i834.scale = new pc.Vec3( i835[38], i835[39], i835[40] )
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemSizeBySpeed()
  var i837 = data
  i836.enabled = !!i837[0]
  i836.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[1], i836.x)
  i836.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[2], i836.y)
  i836.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[3], i836.z)
  i836.separateAxes = !!i837[4]
  i836.range = new pc.Vec2( i837[5], i837[6] )
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemSizeOverLifetime()
  var i839 = data
  i838.enabled = !!i839[0]
  i838.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[1], i838.x)
  i838.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[2], i838.y)
  i838.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[3], i838.z)
  i838.separateAxes = !!i839[4]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.mode = i841[1]
  i840.animation = i841[2]
  i840.numTilesX = i841[3]
  i840.numTilesY = i841[4]
  i840.useRandomRow = !!i841[5]
  i840.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[6], i840.frameOverTime)
  i840.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[7], i840.startFrame)
  i840.cycleCount = i841[8]
  i840.rowIndex = i841[9]
  i840.flipU = i841[10]
  i840.flipV = i841[11]
  i840.spriteCount = i841[12]
  var i843 = i841[13]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i840.sprites = i842
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i846 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i847 = data
  i846.enabled = !!i847[0]
  i846.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[1], i846.x)
  i846.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[2], i846.y)
  i846.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[3], i846.z)
  i846.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[4], i846.speedModifier)
  i846.space = i847[5]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i848 = root || new pc.ParticleSystemNoise()
  var i849 = data
  i848.enabled = !!i849[0]
  i848.separateAxes = !!i849[1]
  i848.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[2], i848.strengthX)
  i848.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[3], i848.strengthY)
  i848.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[4], i848.strengthZ)
  i848.frequency = i849[5]
  i848.damping = !!i849[6]
  i848.octaveCount = i849[7]
  i848.octaveMultiplier = i849[8]
  i848.octaveScale = i849[9]
  i848.quality = i849[10]
  i848.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[11], i848.scrollSpeed)
  i848.scrollSpeedMultiplier = i849[12]
  i848.remapEnabled = !!i849[13]
  i848.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[14], i848.remapX)
  i848.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[15], i848.remapY)
  i848.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[16], i848.remapZ)
  i848.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[17], i848.positionAmount)
  i848.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[18], i848.rotationAmount)
  i848.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[19], i848.sizeAmount)
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i850 = root || new pc.ParticleSystemInheritVelocity()
  var i851 = data
  i850.enabled = !!i851[0]
  i850.mode = i851[1]
  i850.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[2], i850.curve)
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i852 = root || new pc.ParticleSystemForceOverLifetime()
  var i853 = data
  i852.enabled = !!i853[0]
  i852.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[1], i852.x)
  i852.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[2], i852.y)
  i852.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[3], i852.z)
  i852.space = i853[4]
  i852.randomized = !!i853[5]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i854 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i855 = data
  i854.enabled = !!i855[0]
  i854.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[1], i854.limitX)
  i854.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[2], i854.limitY)
  i854.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[3], i854.limitZ)
  i854.dampen = i855[4]
  i854.separateAxes = !!i855[5]
  i854.space = i855[6]
  i854.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[7], i854.drag)
  i854.multiplyDragByParticleSize = !!i855[8]
  i854.multiplyDragByParticleVelocity = !!i855[9]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i857 = data
  i856.enabled = !!i857[0]
  request.r(i857[1], i857[2], 0, i856, 'sharedMaterial')
  var i859 = i857[3]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i856.sharedMaterials = i858
  i856.receiveShadows = !!i857[4]
  i856.shadowCastingMode = i857[5]
  i856.sortingLayerID = i857[6]
  i856.sortingOrder = i857[7]
  i856.lightmapIndex = i857[8]
  i856.lightmapSceneIndex = i857[9]
  i856.lightmapScaleOffset = new pc.Vec4( i857[10], i857[11], i857[12], i857[13] )
  i856.lightProbeUsage = i857[14]
  i856.reflectionProbeUsage = i857[15]
  request.r(i857[16], i857[17], 0, i856, 'mesh')
  i856.meshCount = i857[18]
  i856.activeVertexStreamsCount = i857[19]
  i856.alignment = i857[20]
  i856.renderMode = i857[21]
  i856.sortMode = i857[22]
  i856.lengthScale = i857[23]
  i856.velocityScale = i857[24]
  i856.cameraVelocityScale = i857[25]
  i856.normalDirection = i857[26]
  i856.sortingFudge = i857[27]
  i856.minParticleSize = i857[28]
  i856.maxParticleSize = i857[29]
  i856.pivot = new pc.Vec3( i857[30], i857[31], i857[32] )
  request.r(i857[33], i857[34], 0, i856, 'trailMaterial')
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'sharedMesh')
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'additionalVertexStreams')
  i862.enabled = !!i863[2]
  request.r(i863[3], i863[4], 0, i862, 'sharedMaterial')
  var i865 = i863[5]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i862.sharedMaterials = i864
  i862.receiveShadows = !!i863[6]
  i862.shadowCastingMode = i863[7]
  i862.sortingLayerID = i863[8]
  i862.sortingOrder = i863[9]
  i862.lightmapIndex = i863[10]
  i862.lightmapSceneIndex = i863[11]
  i862.lightmapScaleOffset = new pc.Vec4( i863[12], i863[13], i863[14], i863[15] )
  i862.lightProbeUsage = i863[16]
  i862.reflectionProbeUsage = i863[17]
  return i862
}

Deserializers["BulletController"] = function (request, data, root) {
  var i866 = root || request.c( 'BulletController' )
  var i867 = data
  i866.speed = i867[0]
  i866.timeDisappear = i867[1]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'clip')
  i868.playOnAwake = !!i869[2]
  i868.loop = !!i869[3]
  i868.time = i869[4]
  i868.volume = i869[5]
  i868.pitch = i869[6]
  i868.enabled = !!i869[7]
  return i868
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i871 = data
  i870.hashCode = i871[0]
  request.r(i871[1], i871[2], 0, i870, 'material')
  i870.materialHashCode = i871[3]
  request.r(i871[4], i871[5], 0, i870, 'atlas')
  i870.normalStyle = i871[6]
  i870.normalSpacingOffset = i871[7]
  i870.boldStyle = i871[8]
  i870.boldSpacing = i871[9]
  i870.italicStyle = i871[10]
  i870.tabSize = i871[11]
  i870.m_Version = i871[12]
  i870.m_SourceFontFileGUID = i871[13]
  request.r(i871[14], i871[15], 0, i870, 'm_SourceFontFile_EditorRef')
  request.r(i871[16], i871[17], 0, i870, 'm_SourceFontFile')
  i870.m_AtlasPopulationMode = i871[18]
  i870.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i871[19], i870.m_FaceInfo)
  var i873 = i871[20]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i873.length; i += 1) {
    i872.add(request.d('UnityEngine.TextCore.Glyph', i873[i + 0]));
  }
  i870.m_GlyphTable = i872
  var i875 = i871[21]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i875.length; i += 1) {
    i874.add(request.d('TMPro.TMP_Character', i875[i + 0]));
  }
  i870.m_CharacterTable = i874
  var i877 = i871[22]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i870.m_AtlasTextures = i876
  i870.m_AtlasTextureIndex = i871[23]
  i870.m_IsMultiAtlasTexturesEnabled = !!i871[24]
  var i879 = i871[25]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i879.length; i += 1) {
    i878.add(request.d('UnityEngine.TextCore.GlyphRect', i879[i + 0]));
  }
  i870.m_UsedGlyphRects = i878
  var i881 = i871[26]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('UnityEngine.TextCore.GlyphRect', i881[i + 0]));
  }
  i870.m_FreeGlyphRects = i880
  i870.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i871[27], i870.m_fontInfo)
  i870.m_AtlasWidth = i871[28]
  i870.m_AtlasHeight = i871[29]
  i870.m_AtlasPadding = i871[30]
  i870.m_AtlasRenderMode = i871[31]
  var i883 = i871[32]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(request.d('TMPro.TMP_Glyph', i883[i + 0]));
  }
  i870.m_glyphInfoList = i882
  i870.m_KerningTable = request.d('TMPro.KerningTable', i871[33], i870.m_KerningTable)
  i870.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i871[34], i870.m_FontFeatureTable)
  var i885 = i871[35]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 1, i884, '')
  }
  i870.fallbackFontAssets = i884
  var i887 = i871[36]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 1, i886, '')
  }
  i870.m_FallbackFontAssetTable = i886
  i870.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i871[37], i870.m_CreationSettings)
  var i889 = i871[38]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('TMPro.TMP_FontWeightPair', i889[i + 0]) );
  }
  i870.m_FontWeightTable = i888
  var i891 = i871[39]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('TMPro.TMP_FontWeightPair', i891[i + 0]) );
  }
  i870.fontWeights = i890
  return i870
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i893 = data
  i892.m_FaceIndex = i893[0]
  i892.m_FamilyName = i893[1]
  i892.m_StyleName = i893[2]
  i892.m_PointSize = i893[3]
  i892.m_Scale = i893[4]
  i892.m_LineHeight = i893[5]
  i892.m_AscentLine = i893[6]
  i892.m_CapLine = i893[7]
  i892.m_MeanLine = i893[8]
  i892.m_Baseline = i893[9]
  i892.m_DescentLine = i893[10]
  i892.m_SuperscriptOffset = i893[11]
  i892.m_SuperscriptSize = i893[12]
  i892.m_SubscriptOffset = i893[13]
  i892.m_SubscriptSize = i893[14]
  i892.m_UnderlineOffset = i893[15]
  i892.m_UnderlineThickness = i893[16]
  i892.m_StrikethroughOffset = i893[17]
  i892.m_StrikethroughThickness = i893[18]
  i892.m_TabWidth = i893[19]
  return i892
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i897 = data
  i896.m_Index = i897[0]
  i896.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i897[1], i896.m_Metrics)
  i896.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i897[2], i896.m_GlyphRect)
  i896.m_Scale = i897[3]
  i896.m_AtlasIndex = i897[4]
  return i896
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i899 = data
  i898.m_Width = i899[0]
  i898.m_Height = i899[1]
  i898.m_HorizontalBearingX = i899[2]
  i898.m_HorizontalBearingY = i899[3]
  i898.m_HorizontalAdvance = i899[4]
  return i898
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i901 = data
  i900.m_X = i901[0]
  i900.m_Y = i901[1]
  i900.m_Width = i901[2]
  i900.m_Height = i901[3]
  return i900
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i904 = root || request.c( 'TMPro.TMP_Character' )
  var i905 = data
  i904.m_ElementType = i905[0]
  i904.m_Unicode = i905[1]
  i904.m_GlyphIndex = i905[2]
  i904.m_Scale = i905[3]
  return i904
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i911 = data
  i910.Name = i911[0]
  i910.PointSize = i911[1]
  i910.Scale = i911[2]
  i910.CharacterCount = i911[3]
  i910.LineHeight = i911[4]
  i910.Baseline = i911[5]
  i910.Ascender = i911[6]
  i910.CapHeight = i911[7]
  i910.Descender = i911[8]
  i910.CenterLine = i911[9]
  i910.SuperscriptOffset = i911[10]
  i910.SubscriptOffset = i911[11]
  i910.SubSize = i911[12]
  i910.Underline = i911[13]
  i910.UnderlineThickness = i911[14]
  i910.strikethrough = i911[15]
  i910.strikethroughThickness = i911[16]
  i910.TabWidth = i911[17]
  i910.Padding = i911[18]
  i910.AtlasWidth = i911[19]
  i910.AtlasHeight = i911[20]
  return i910
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.TMP_Glyph' )
  var i915 = data
  i914.id = i915[0]
  i914.x = i915[1]
  i914.y = i915[2]
  i914.width = i915[3]
  i914.height = i915[4]
  i914.xOffset = i915[5]
  i914.yOffset = i915[6]
  i914.xAdvance = i915[7]
  i914.scale = i915[8]
  return i914
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i916 = root || request.c( 'TMPro.KerningTable' )
  var i917 = data
  var i919 = i917[0]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i919.length; i += 1) {
    i918.add(request.d('TMPro.KerningPair', i919[i + 0]));
  }
  i916.kerningPairs = i918
  return i916
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.KerningPair' )
  var i923 = data
  i922.xOffset = i923[0]
  i922.m_FirstGlyph = i923[1]
  i922.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i923[2], i922.m_FirstGlyphAdjustments)
  i922.m_SecondGlyph = i923[3]
  i922.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i923[4], i922.m_SecondGlyphAdjustments)
  i922.m_IgnoreSpacingAdjustments = !!i923[5]
  return i922
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i924 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i925 = data
  var i927 = i925[0]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i927[i + 0]));
  }
  i924.m_GlyphPairAdjustmentRecords = i926
  return i924
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i931 = data
  i930.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i931[0], i930.m_FirstAdjustmentRecord)
  i930.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i931[1], i930.m_SecondAdjustmentRecord)
  i930.m_FeatureLookupFlags = i931[2]
  return i930
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i933 = data
  i932.m_GlyphIndex = i933[0]
  i932.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i933[1], i932.m_GlyphValueRecord)
  return i932
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i935 = data
  i934.m_XPlacement = i935[0]
  i934.m_YPlacement = i935[1]
  i934.m_XAdvance = i935[2]
  i934.m_YAdvance = i935[3]
  return i934
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i939 = data
  i938.sourceFontFileName = i939[0]
  i938.sourceFontFileGUID = i939[1]
  i938.pointSizeSamplingMode = i939[2]
  i938.pointSize = i939[3]
  i938.padding = i939[4]
  i938.packingMode = i939[5]
  i938.atlasWidth = i939[6]
  i938.atlasHeight = i939[7]
  i938.characterSetSelectionMode = i939[8]
  i938.characterSequence = i939[9]
  i938.referencedFontAssetGUID = i939[10]
  i938.referencedTextAssetGUID = i939[11]
  i938.fontStyle = i939[12]
  i938.fontStyleModifier = i939[13]
  i938.renderMode = i939[14]
  i938.includeFontFeatures = !!i939[15]
  return i938
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'regularTypeface')
  request.r(i943[2], i943[3], 0, i942, 'italicTypeface')
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i945 = data
  i944.pivot = new pc.Vec2( i945[0], i945[1] )
  i944.anchorMin = new pc.Vec2( i945[2], i945[3] )
  i944.anchorMax = new pc.Vec2( i945[4], i945[5] )
  i944.sizeDelta = new pc.Vec2( i945[6], i945[7] )
  i944.anchoredPosition3D = new pc.Vec3( i945[8], i945[9], i945[10] )
  i944.rotation = new pc.Quat(i945[11], i945[12], i945[13], i945[14])
  i944.scale = new pc.Vec3( i945[15], i945[16], i945[17] )
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i947 = data
  i946.cullTransparentMesh = !!i947[0]
  return i946
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.Image' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'm_Sprite')
  i948.m_Type = i949[2]
  i948.m_PreserveAspect = !!i949[3]
  i948.m_FillCenter = !!i949[4]
  i948.m_FillMethod = i949[5]
  i948.m_FillAmount = i949[6]
  i948.m_FillClockwise = !!i949[7]
  i948.m_FillOrigin = i949[8]
  i948.m_UseSpriteMesh = !!i949[9]
  i948.m_PixelsPerUnitMultiplier = i949[10]
  request.r(i949[11], i949[12], 0, i948, 'm_Material')
  i948.m_Maskable = !!i949[13]
  i948.m_Color = new pc.Color(i949[14], i949[15], i949[16], i949[17])
  i948.m_RaycastTarget = !!i949[18]
  i948.m_RaycastPadding = new pc.Vec4( i949[19], i949[20], i949[21], i949[22] )
  return i948
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.UI.Text' )
  var i951 = data
  i950.m_FontData = request.d('UnityEngine.UI.FontData', i951[0], i950.m_FontData)
  i950.m_Text = i951[1]
  request.r(i951[2], i951[3], 0, i950, 'm_Material')
  i950.m_Maskable = !!i951[4]
  i950.m_Color = new pc.Color(i951[5], i951[6], i951[7], i951[8])
  i950.m_RaycastTarget = !!i951[9]
  i950.m_RaycastPadding = new pc.Vec4( i951[10], i951[11], i951[12], i951[13] )
  return i950
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.UI.FontData' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'm_Font')
  i952.m_FontSize = i953[2]
  i952.m_FontStyle = i953[3]
  i952.m_BestFit = !!i953[4]
  i952.m_MinSize = i953[5]
  i952.m_MaxSize = i953[6]
  i952.m_Alignment = i953[7]
  i952.m_AlignByGeometry = !!i953[8]
  i952.m_RichText = !!i953[9]
  i952.m_HorizontalOverflow = i953[10]
  i952.m_VerticalOverflow = i953[11]
  i952.m_LineSpacing = i953[12]
  return i952
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.UI.Outline' )
  var i955 = data
  i954.m_EffectColor = new pc.Color(i955[0], i955[1], i955[2], i955[3])
  i954.m_EffectDistance = new pc.Vec2( i955[4], i955[5] )
  i954.m_UseGraphicAlpha = !!i955[6]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i957 = data
  i956.center = new pc.Vec3( i957[0], i957[1], i957[2] )
  i956.size = new pc.Vec3( i957[3], i957[4], i957[5] )
  i956.enabled = !!i957[6]
  i956.isTrigger = !!i957[7]
  request.r(i957[8], i957[9], 0, i956, 'material')
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i959 = data
  i958.enabled = !!i959[0]
  request.r(i959[1], i959[2], 0, i958, 'sharedMaterial')
  var i961 = i959[3]
  var i960 = []
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 2, i960, '')
  }
  i958.sharedMaterials = i960
  i958.receiveShadows = !!i959[4]
  i958.shadowCastingMode = i959[5]
  i958.sortingLayerID = i959[6]
  i958.sortingOrder = i959[7]
  i958.lightmapIndex = i959[8]
  i958.lightmapSceneIndex = i959[9]
  i958.lightmapScaleOffset = new pc.Vec4( i959[10], i959[11], i959[12], i959[13] )
  i958.lightProbeUsage = i959[14]
  i958.reflectionProbeUsage = i959[15]
  i958.color = new pc.Color(i959[16], i959[17], i959[18], i959[19])
  request.r(i959[20], i959[21], 0, i958, 'sprite')
  i958.flipX = !!i959[22]
  i958.flipY = !!i959[23]
  i958.drawMode = i959[24]
  i958.size = new pc.Vec2( i959[25], i959[26] )
  i958.tileMode = i959[27]
  i958.adaptiveModeThreshold = i959[28]
  i958.maskInteraction = i959[29]
  i958.spriteSortPoint = i959[30]
  return i958
}

Deserializers["ItemController"] = function (request, data, root) {
  var i962 = root || request.c( 'ItemController' )
  var i963 = data
  i962.typeCalculate = i963[0]
  i962.typeTimeUnit = i963[1]
  i962.typeMotion = i963[2]
  i962.totalTime = i963[3]
  request.r(i963[4], i963[5], 0, i962, 'textTime')
  request.r(i963[6], i963[7], 0, i962, 'textUnit')
  request.r(i963[8], i963[9], 0, i962, 'portalGood')
  request.r(i963[10], i963[11], 0, i962, 'portalBad')
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i965 = data
  i964.enabled = !!i965[0]
  i964.isTrigger = !!i965[1]
  request.r(i965[2], i965[3], 0, i964, 'material')
  request.r(i965[4], i965[5], 0, i964, 'sharedMesh')
  i964.convex = !!i965[6]
  return i964
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i966 = root || request.c( 'TMPro.TextMeshPro' )
  var i967 = data
  i966.m_hasFontAssetChanged = !!i967[0]
  request.r(i967[1], i967[2], 0, i966, 'm_renderer')
  i966.m_maskType = i967[3]
  i966._SortingLayerID = i967[4]
  i966._SortingOrder = i967[5]
  i966.m_text = i967[6]
  i966.m_isRightToLeft = !!i967[7]
  request.r(i967[8], i967[9], 0, i966, 'm_fontAsset')
  request.r(i967[10], i967[11], 0, i966, 'm_sharedMaterial')
  var i969 = i967[12]
  var i968 = []
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 2, i968, '')
  }
  i966.m_fontSharedMaterials = i968
  request.r(i967[13], i967[14], 0, i966, 'm_fontMaterial')
  var i971 = i967[15]
  var i970 = []
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 2, i970, '')
  }
  i966.m_fontMaterials = i970
  i966.m_fontColor32 = UnityEngine.Color32.ConstructColor(i967[16], i967[17], i967[18], i967[19])
  i966.m_fontColor = new pc.Color(i967[20], i967[21], i967[22], i967[23])
  i966.m_enableVertexGradient = !!i967[24]
  i966.m_colorMode = i967[25]
  i966.m_fontColorGradient = request.d('TMPro.VertexGradient', i967[26], i966.m_fontColorGradient)
  request.r(i967[27], i967[28], 0, i966, 'm_fontColorGradientPreset')
  request.r(i967[29], i967[30], 0, i966, 'm_spriteAsset')
  i966.m_tintAllSprites = !!i967[31]
  request.r(i967[32], i967[33], 0, i966, 'm_StyleSheet')
  i966.m_TextStyleHashCode = i967[34]
  i966.m_overrideHtmlColors = !!i967[35]
  i966.m_faceColor = UnityEngine.Color32.ConstructColor(i967[36], i967[37], i967[38], i967[39])
  i966.m_fontSize = i967[40]
  i966.m_fontSizeBase = i967[41]
  i966.m_fontWeight = i967[42]
  i966.m_enableAutoSizing = !!i967[43]
  i966.m_fontSizeMin = i967[44]
  i966.m_fontSizeMax = i967[45]
  i966.m_fontStyle = i967[46]
  i966.m_HorizontalAlignment = i967[47]
  i966.m_VerticalAlignment = i967[48]
  i966.m_textAlignment = i967[49]
  i966.m_characterSpacing = i967[50]
  i966.m_wordSpacing = i967[51]
  i966.m_lineSpacing = i967[52]
  i966.m_lineSpacingMax = i967[53]
  i966.m_paragraphSpacing = i967[54]
  i966.m_charWidthMaxAdj = i967[55]
  i966.m_enableWordWrapping = !!i967[56]
  i966.m_wordWrappingRatios = i967[57]
  i966.m_overflowMode = i967[58]
  request.r(i967[59], i967[60], 0, i966, 'm_linkedTextComponent')
  request.r(i967[61], i967[62], 0, i966, 'parentLinkedComponent')
  i966.m_enableKerning = !!i967[63]
  i966.m_enableExtraPadding = !!i967[64]
  i966.checkPaddingRequired = !!i967[65]
  i966.m_isRichText = !!i967[66]
  i966.m_parseCtrlCharacters = !!i967[67]
  i966.m_isOrthographic = !!i967[68]
  i966.m_isCullingEnabled = !!i967[69]
  i966.m_horizontalMapping = i967[70]
  i966.m_verticalMapping = i967[71]
  i966.m_uvLineOffset = i967[72]
  i966.m_geometrySortingOrder = i967[73]
  i966.m_IsTextObjectScaleStatic = !!i967[74]
  i966.m_VertexBufferAutoSizeReduction = !!i967[75]
  i966.m_useMaxVisibleDescender = !!i967[76]
  i966.m_pageToDisplay = i967[77]
  i966.m_margin = new pc.Vec4( i967[78], i967[79], i967[80], i967[81] )
  i966.m_isUsingLegacyAnimationComponent = !!i967[82]
  i966.m_isVolumetricText = !!i967[83]
  request.r(i967[84], i967[85], 0, i966, 'm_Material')
  i966.m_Maskable = !!i967[86]
  i966.m_Color = new pc.Color(i967[87], i967[88], i967[89], i967[90])
  i966.m_RaycastTarget = !!i967[91]
  i966.m_RaycastPadding = new pc.Vec4( i967[92], i967[93], i967[94], i967[95] )
  return i966
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.VertexGradient' )
  var i973 = data
  i972.topLeft = new pc.Color(i973[0], i973[1], i973[2], i973[3])
  i972.topRight = new pc.Color(i973[4], i973[5], i973[6], i973[7])
  i972.bottomLeft = new pc.Color(i973[8], i973[9], i973[10], i973[11])
  i972.bottomRight = new pc.Color(i973[12], i973[13], i973[14], i973[15])
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'animatorController')
  i974.updateMode = i975[2]
  var i977 = i975[3]
  var i976 = []
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 2, i976, '')
  }
  i974.humanBones = i976
  i974.enabled = !!i975[4]
  return i974
}

Deserializers["EnemyController"] = function (request, data, root) {
  var i978 = root || request.c( 'EnemyController' )
  var i979 = data
  var i981 = i979[0]
  var i980 = []
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 2, i980, '')
  }
  i978.allRig = i980
  i978.isKnockout = !!i979[1]
  var i983 = i979[2]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 2, i982, '')
  }
  i978.arEnemySkin = i982
  i978.isMulti = !!i979[3]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i989 = data
  i988.mass = i989[0]
  i988.drag = i989[1]
  i988.angularDrag = i989[2]
  i988.useGravity = !!i989[3]
  i988.isKinematic = !!i989[4]
  i988.constraints = i989[5]
  i988.maxAngularVelocity = i989[6]
  i988.collisionDetectionMode = i989[7]
  i988.interpolation = i989[8]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i991 = data
  i990.center = new pc.Vec3( i991[0], i991[1], i991[2] )
  i990.radius = i991[3]
  i990.height = i991[4]
  i990.direction = i991[5]
  i990.enabled = !!i991[6]
  i990.isTrigger = !!i991[7]
  request.r(i991[8], i991[9], 0, i990, 'material')
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterJoint"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterJoint' )
  var i993 = data
  i992.swingAxis = new pc.Vec3( i993[0], i993[1], i993[2] )
  i992.twistLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i993[3], i992.twistLimitSpring)
  i992.swingLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i993[4], i992.swingLimitSpring)
  i992.lowTwistLimit = request.d('UnityEngine.SoftJointLimit', i993[5], i992.lowTwistLimit)
  i992.highTwistLimit = request.d('UnityEngine.SoftJointLimit', i993[6], i992.highTwistLimit)
  i992.swing1Limit = request.d('UnityEngine.SoftJointLimit', i993[7], i992.swing1Limit)
  i992.swing2Limit = request.d('UnityEngine.SoftJointLimit', i993[8], i992.swing2Limit)
  request.r(i993[9], i993[10], 0, i992, 'connectedBody')
  i992.axis = new pc.Vec3( i993[11], i993[12], i993[13] )
  i992.anchor = new pc.Vec3( i993[14], i993[15], i993[16] )
  i992.connectedAnchor = new pc.Vec3( i993[17], i993[18], i993[19] )
  i992.autoConfigureConnectedAnchor = !!i993[20]
  i992.massScale = i993[21]
  i992.connectedMassScale = i993[22]
  i992.enableCollision = !!i993[23]
  i992.breakForce = i993[24]
  i992.breakTorque = i993[25]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i995 = data
  i994.enabled = !!i995[0]
  i994.isTrigger = !!i995[1]
  request.r(i995[2], i995[3], 0, i994, 'material')
  i994.center = new pc.Vec3( i995[4], i995[5], i995[6] )
  i994.radius = i995[7]
  return i994
}

Deserializers["FighterController"] = function (request, data, root) {
  var i996 = root || request.c( 'FighterController' )
  var i997 = data
  i996.fighterID = i997[0]
  i996.totalHP = i997[1]
  i996.dps = i997[2]
  i996.currentHP = i997[3]
  request.r(i997[4], i997[5], 0, i996, 'hpBar')
  request.r(i997[6], i997[7], 0, i996, 'opponent')
  request.r(i997[8], i997[9], 0, i996, 'tfChar')
  i996.isBoss = !!i997[10]
  request.r(i997[11], i997[12], 0, i996, 'obj')
  request.r(i997[13], i997[14], 0, i996, 'tapToAttackHint')
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i999 = data
  i998.enabled = !!i999[0]
  i998.aspect = i999[1]
  i998.orthographic = !!i999[2]
  i998.orthographicSize = i999[3]
  i998.backgroundColor = new pc.Color(i999[4], i999[5], i999[6], i999[7])
  i998.nearClipPlane = i999[8]
  i998.farClipPlane = i999[9]
  i998.fieldOfView = i999[10]
  i998.depth = i999[11]
  i998.clearFlags = i999[12]
  i998.cullingMask = i999[13]
  i998.rect = i999[14]
  request.r(i999[15], i999[16], 0, i998, 'targetTexture')
  return i998
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i1000 = root || request.c( 'CameraFollow' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'target')
  i1000.smoothing = i1001[2]
  i1000.isLook = !!i1001[3]
  return i1000
}

Deserializers["BossController"] = function (request, data, root) {
  var i1002 = root || request.c( 'BossController' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'anim')
  i1002.distanceHitbox = i1003[2]
  var i1005 = i1003[3]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 2) {
  request.r(i1005[i + 0], i1005[i + 1], 2, i1004, '')
  }
  i1002.arSkin = i1004
  i1002.isShooter = !!i1003[4]
  request.r(i1003[5], i1003[6], 0, i1002, 'tfBullet')
  request.r(i1003[7], i1003[8], 0, i1002, 'fx_shoot')
  request.r(i1003[9], i1003[10], 0, i1002, 'weaponsRight')
  request.r(i1003[11], i1003[12], 0, i1002, 'weaponsLeft')
  var i1007 = i1003[13]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 1, i1006, '')
  }
  i1002.listWeaponRight = i1006
  var i1009 = i1003[14]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 1, i1008, '')
  }
  i1002.listWeaponLeft = i1008
  var i1011 = i1003[15]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1002.arMeshWeaponSkin = i1010
  var i1013 = i1003[16]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 2) {
  request.r(i1013[i + 0], i1013[i + 1], 2, i1012, '')
  }
  i1002.allRig = i1012
  i1002.isDefeat = !!i1003[17]
  request.r(i1003[18], i1003[19], 0, i1002, 'fx_slash')
  request.r(i1003[20], i1003[21], 0, i1002, 'fx_hitted')
  request.r(i1003[22], i1003[23], 0, i1002, 'fx_spear_hit')
  i1002.isBoss = !!i1003[24]
  i1002.level = i1003[25]
  i1002.skinID = i1003[26]
  request.r(i1003[27], i1003[28], 0, i1002, 'arrow')
  request.r(i1003[29], i1003[30], 0, i1002, 'bullet1')
  request.r(i1003[31], i1003[32], 0, i1002, 'bullet2')
  request.r(i1003[33], i1003[34], 0, i1002, 'bullet3')
  request.r(i1003[35], i1003[36], 0, i1002, 'laser1')
  request.r(i1003[37], i1003[38], 0, i1002, 'laser2')
  return i1002
}

Deserializers["MultiController"] = function (request, data, root) {
  var i1018 = root || request.c( 'MultiController' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'ground')
  request.r(i1019[2], i1019[3], 0, i1018, 'textMulti')
  request.r(i1019[4], i1019[5], 0, i1018, 'textMulti2')
  request.r(i1019[6], i1019[7], 0, i1018, 'bonus')
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1021 = data
  i1020.name = i1021[0]
  i1020.atlasId = i1021[1]
  i1020.mipmapCount = i1021[2]
  i1020.hdr = !!i1021[3]
  i1020.size = i1021[4]
  i1020.anisoLevel = i1021[5]
  i1020.filterMode = i1021[6]
  i1020.wrapMode = i1021[7]
  var i1023 = i1021[8]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 4) {
    i1022.push( UnityEngine.Rect.MinMaxRect(i1023[i + 0], i1023[i + 1], i1023[i + 2], i1023[i + 3]) );
  }
  i1020.rects = i1022
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.index = i1027[1]
  i1026.startup = !!i1027[2]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1029 = data
  i1028.enabled = !!i1029[0]
  i1028.type = i1029[1]
  i1028.color = new pc.Color(i1029[2], i1029[3], i1029[4], i1029[5])
  i1028.cullingMask = i1029[6]
  i1028.intensity = i1029[7]
  i1028.range = i1029[8]
  i1028.spotAngle = i1029[9]
  i1028.shadows = i1029[10]
  i1028.shadowNormalBias = i1029[11]
  i1028.shadowBias = i1029[12]
  i1028.shadowStrength = i1029[13]
  i1028.lightmapBakeType = i1029[14]
  i1028.renderMode = i1029[15]
  request.r(i1029[16], i1029[17], 0, i1028, 'cookie')
  i1028.cookieSize = i1029[18]
  return i1028
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i1030 = root || request.c( 'PlayerController' )
  var i1031 = data
  i1030.currentScore = i1031[0]
  i1030.currentMultiID = i1031[1]
  i1030.moveSpeed = i1031[2]
  i1030.sensitivity = i1031[3]
  i1030.MaxDistance = i1031[4]
  i1030.DistanceScale = i1031[5]
  i1030.ScreenSwipeScale = i1031[6]
  i1030.isStart = !!i1031[7]
  i1030.isEnding = !!i1031[8]
  i1030.isCelebrate = !!i1031[9]
  request.r(i1031[10], i1031[11], 0, i1030, 'playerAnim')
  var i1033 = i1031[12]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Animator')))
  for(var i = 0; i < i1033.length; i += 2) {
  request.r(i1033[i + 0], i1033[i + 1], 1, i1032, '')
  }
  i1030.listCharAnim = i1032
  var i1035 = i1031[13]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 2) {
  request.r(i1035[i + 0], i1035[i + 1], 2, i1034, '')
  }
  i1030.arrCharacters = i1034
  request.r(i1031[14], i1031[15], 0, i1030, 'currentChar')
  i1030.currentCharID = i1031[16]
  i1030.currentEnemySkinID = i1031[17]
  i1030.level = i1031[18]
  i1030.skinID = i1031[19]
  request.r(i1031[20], i1031[21], 0, i1030, 'fx_confetti')
  var i1037 = i1031[22]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i1037.length; i += 2) {
  request.r(i1037[i + 0], i1037[i + 1], 1, i1036, '')
  }
  i1030.listFXtransformChar = i1036
  request.r(i1031[23], i1031[24], 0, i1030, 'pointEnd')
  request.r(i1031[25], i1031[26], 0, i1030, 'panelTap')
  request.r(i1031[27], i1031[28], 0, i1030, 'tapToAttackHint')
  var i1039 = i1031[29]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('PlayerController+DataCharacter')))
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.add(request.d('PlayerController+DataCharacter', i1039[i + 0]));
  }
  i1030.dataCharacters = i1038
  request.r(i1031[30], i1031[31], 0, i1030, 'cloneChar')
  request.r(i1031[32], i1031[33], 0, i1030, 'boss')
  request.r(i1031[34], i1031[35], 0, i1030, 'player')
  request.r(i1031[36], i1031[37], 0, i1030, 'mainCamera')
  request.r(i1031[38], i1031[39], 0, i1030, 'textScore')
  request.r(i1031[40], i1031[41], 0, i1030, 'textMultiplier')
  return i1030
}

Deserializers["PlayerController+DataCharacter"] = function (request, data, root) {
  var i1046 = root || request.c( 'PlayerController+DataCharacter' )
  var i1047 = data
  i1046.id = i1047[0]
  i1046.time = i1047[1]
  i1046.hp = i1047[2]
  i1046.dps = i1047[3]
  i1046.dataCharacter = request.d('PlayerController+DataCharacter', i1047[4], i1046.dataCharacter)
  return i1046
}

Deserializers["CharacterController"] = function (request, data, root) {
  var i1048 = root || request.c( 'CharacterController' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'anim')
  i1048.distanceHitbox = i1049[2]
  var i1051 = i1049[3]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 2) {
  request.r(i1051[i + 0], i1051[i + 1], 2, i1050, '')
  }
  i1048.arSkin = i1050
  i1048.isShooter = !!i1049[4]
  request.r(i1049[5], i1049[6], 0, i1048, 'tfBullet')
  request.r(i1049[7], i1049[8], 0, i1048, 'fx_shoot')
  request.r(i1049[9], i1049[10], 0, i1048, 'weaponsRight')
  request.r(i1049[11], i1049[12], 0, i1048, 'weaponsLeft')
  var i1053 = i1049[13]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1053.length; i += 2) {
  request.r(i1053[i + 0], i1053[i + 1], 1, i1052, '')
  }
  i1048.listWeaponRight = i1052
  var i1055 = i1049[14]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1055.length; i += 2) {
  request.r(i1055[i + 0], i1055[i + 1], 1, i1054, '')
  }
  i1048.listWeaponLeft = i1054
  var i1057 = i1049[15]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 2, i1056, '')
  }
  i1048.arMeshWeaponSkin = i1056
  var i1059 = i1049[16]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 2) {
  request.r(i1059[i + 0], i1059[i + 1], 2, i1058, '')
  }
  i1048.allRig = i1058
  i1048.isDefeat = !!i1049[17]
  request.r(i1049[18], i1049[19], 0, i1048, 'fx_slash')
  request.r(i1049[20], i1049[21], 0, i1048, 'fx_hitted')
  request.r(i1049[22], i1049[23], 0, i1048, 'fx_spear_hit')
  i1048.isBoss = !!i1049[24]
  i1048.level = i1049[25]
  i1048.skinID = i1049[26]
  request.r(i1049[27], i1049[28], 0, i1048, 'arrow')
  request.r(i1049[29], i1049[30], 0, i1048, 'bullet1')
  request.r(i1049[31], i1049[32], 0, i1048, 'bullet2')
  request.r(i1049[33], i1049[34], 0, i1048, 'bullet3')
  request.r(i1049[35], i1049[36], 0, i1048, 'laser1')
  request.r(i1049[37], i1049[38], 0, i1048, 'laser2')
  return i1048
}

Deserializers["ClampScore"] = function (request, data, root) {
  var i1060 = root || request.c( 'ClampScore' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'goScore')
  return i1060
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1062 = root || request.c( 'GameManager' )
  var i1063 = data
  i1062.rewardCoin = i1063[0]
  i1062.totalCoin = i1063[1]
  request.r(i1063[2], i1063[3], 0, i1062, 'panelFighting')
  request.r(i1063[4], i1063[5], 0, i1062, 'prefabHpBar')
  request.r(i1063[6], i1063[7], 0, i1062, 'prefabHpLost')
  request.r(i1063[8], i1063[9], 0, i1062, 'tfFX')
  request.r(i1063[10], i1063[11], 0, i1062, 'fx_coin_blast')
  request.r(i1063[12], i1063[13], 0, i1062, 'fx_coin_blast_UI')
  return i1062
}

Deserializers["GameUIManager"] = function (request, data, root) {
  var i1064 = root || request.c( 'GameUIManager' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'canvasMain')
  request.r(i1065[2], i1065[3], 0, i1064, 'panelFighting')
  request.r(i1065[4], i1065[5], 0, i1064, 'popupEnding')
  request.r(i1065[6], i1065[7], 0, i1064, 'popupDefeat')
  request.r(i1065[8], i1065[9], 0, i1064, 'textCoin')
  request.r(i1065[10], i1065[11], 0, i1064, 'imgCoin')
  request.r(i1065[12], i1065[13], 0, i1064, 'prefabTextShow')
  request.r(i1065[14], i1065[15], 0, i1064, 'tfText')
  var i1067 = i1065[16]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 2) {
  request.r(i1067[i + 0], i1067[i + 1], 2, i1066, '')
  }
  i1064.arIconSkinFulls = i1066
  request.r(i1065[17], i1065[18], 0, i1064, 'popupGetSkin')
  request.r(i1065[19], i1065[20], 0, i1064, 'imageIconRewardSkin')
  request.r(i1065[21], i1065[22], 0, i1064, 'buttonGetSkin')
  request.r(i1065[23], i1065[24], 0, i1064, 'installContainer')
  request.r(i1065[25], i1065[26], 0, i1064, 'panelStart')
  return i1064
}

Deserializers["PanelFighting"] = function (request, data, root) {
  var i1068 = root || request.c( 'PanelFighting' )
  var i1069 = data
  i1068.isFighting = !!i1069[0]
  request.r(i1069[1], i1069[2], 0, i1068, 'hpBarPlayer')
  request.r(i1069[3], i1069[4], 0, i1068, 'hpBarEnemy')
  var i1071 = i1069[5]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 2) {
  request.r(i1071[i + 0], i1071[i + 1], 2, i1070, '')
  }
  i1068.skins = i1070
  return i1068
}

Deserializers["MapManager"] = function (request, data, root) {
  var i1072 = root || request.c( 'MapManager' )
  var i1073 = data
  request.r(i1073[0], i1073[1], 0, i1072, 'pointEnd')
  i1072.isMapBoss = !!i1073[2]
  request.r(i1073[3], i1073[4], 0, i1072, 'boss')
  request.r(i1073[5], i1073[6], 0, i1072, 'tfMulti')
  request.r(i1073[7], i1073[8], 0, i1072, 'prefabMulti')
  request.r(i1073[9], i1073[10], 0, i1072, 'prefabEnemy')
  var i1075 = i1073[11]
  var i1074 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1075.length; i += 2) {
  request.r(i1075[i + 0], i1075[i + 1], 1, i1074, '')
  }
  i1072.listMultis = i1074
  request.r(i1073[12], i1073[13], 0, i1072, 'ground')
  request.r(i1073[14], i1073[15], 0, i1072, 'level')
  var i1077 = i1073[16]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 2) {
  request.r(i1077[i + 0], i1077[i + 1], 2, i1076, '')
  }
  i1072.arrEnemies = i1076
  request.r(i1073[17], i1073[18], 0, i1072, 'main')
  request.r(i1073[19], i1073[20], 0, i1072, 'uiManager')
  return i1072
}

Deserializers["SoundController"] = function (request, data, root) {
  var i1080 = root || request.c( 'SoundController' )
  var i1081 = data
  request.r(i1081[0], i1081[1], 0, i1080, 'audioMusic')
  request.r(i1081[2], i1081[3], 0, i1080, 'sound_melee')
  request.r(i1081[4], i1081[5], 0, i1080, 'sound_bravo')
  request.r(i1081[6], i1081[7], 0, i1080, 'sound_upgrade')
  request.r(i1081[8], i1081[9], 0, i1080, 'sound_click_button')
  i1080.volumeMusic = i1081[10]
  request.r(i1081[11], i1081[12], 0, i1080, 'audioSound')
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1083 = data
  i1082.enabled = !!i1083[0]
  i1082.planeDistance = i1083[1]
  i1082.referencePixelsPerUnit = i1083[2]
  i1082.isFallbackOverlay = !!i1083[3]
  i1082.renderMode = i1083[4]
  i1082.renderOrder = i1083[5]
  i1082.sortingLayerName = i1083[6]
  i1082.sortingOrder = i1083[7]
  i1082.scaleFactor = i1083[8]
  request.r(i1083[9], i1083[10], 0, i1082, 'worldCamera')
  i1082.overrideSorting = !!i1083[11]
  i1082.pixelPerfect = !!i1083[12]
  i1082.targetDisplay = i1083[13]
  i1082.overridePixelPerfect = !!i1083[14]
  return i1082
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1084 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1085 = data
  i1084.m_UiScaleMode = i1085[0]
  i1084.m_ReferencePixelsPerUnit = i1085[1]
  i1084.m_ScaleFactor = i1085[2]
  i1084.m_ReferenceResolution = new pc.Vec2( i1085[3], i1085[4] )
  i1084.m_ScreenMatchMode = i1085[5]
  i1084.m_MatchWidthOrHeight = i1085[6]
  i1084.m_PhysicalUnit = i1085[7]
  i1084.m_FallbackScreenDPI = i1085[8]
  i1084.m_DefaultSpriteDPI = i1085[9]
  i1084.m_DynamicPixelsPerUnit = i1085[10]
  i1084.m_PresetInfoIsWorld = !!i1085[11]
  return i1084
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1087 = data
  i1086.m_IgnoreReversedGraphics = !!i1087[0]
  i1086.m_BlockingObjects = i1087[1]
  i1086.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1087[2] )
  return i1086
}

Deserializers["CanvasScalerMatch"] = function (request, data, root) {
  var i1088 = root || request.c( 'CanvasScalerMatch' )
  var i1089 = data
  var i1091 = i1089[0]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 2) {
  request.r(i1091[i + 0], i1091[i + 1], 2, i1090, '')
  }
  i1088.arAanvasScaler = i1090
  return i1088
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i1095 = data
  var i1097 = i1095[0]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i1097[i + 0]));
  }
  i1094.m_Delegates = i1096
  return i1094
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i1101 = data
  i1100.eventID = i1101[0]
  i1100.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i1101[1], i1100.callback)
  return i1100
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i1102 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i1103 = data
  i1102.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1103[0], i1102.m_PersistentCalls)
  return i1102
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1105 = data
  var i1107 = i1105[0]
  var i1106 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.add(request.d('UnityEngine.Events.PersistentCall', i1107[i + 0]));
  }
  i1104.m_Calls = i1106
  return i1104
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'm_Target')
  i1110.m_TargetAssemblyTypeName = i1111[2]
  i1110.m_MethodName = i1111[3]
  i1110.m_Mode = i1111[4]
  i1110.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1111[5], i1110.m_Arguments)
  i1110.m_CallState = i1111[6]
  return i1110
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1112 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1113 = data
  request.r(i1113[0], i1113[1], 0, i1112, 'm_ObjectArgument')
  i1112.m_ObjectArgumentAssemblyTypeName = i1113[2]
  i1112.m_IntArgument = i1113[3]
  i1112.m_FloatArgument = i1113[4]
  i1112.m_StringArgument = i1113[5]
  i1112.m_BoolArgument = !!i1113[6]
  return i1112
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1114 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1115 = data
  i1114.m_hasFontAssetChanged = !!i1115[0]
  request.r(i1115[1], i1115[2], 0, i1114, 'm_baseMaterial')
  i1114.m_maskOffset = new pc.Vec4( i1115[3], i1115[4], i1115[5], i1115[6] )
  i1114.m_text = i1115[7]
  i1114.m_isRightToLeft = !!i1115[8]
  request.r(i1115[9], i1115[10], 0, i1114, 'm_fontAsset')
  request.r(i1115[11], i1115[12], 0, i1114, 'm_sharedMaterial')
  var i1117 = i1115[13]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 2) {
  request.r(i1117[i + 0], i1117[i + 1], 2, i1116, '')
  }
  i1114.m_fontSharedMaterials = i1116
  request.r(i1115[14], i1115[15], 0, i1114, 'm_fontMaterial')
  var i1119 = i1115[16]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 2) {
  request.r(i1119[i + 0], i1119[i + 1], 2, i1118, '')
  }
  i1114.m_fontMaterials = i1118
  i1114.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1115[17], i1115[18], i1115[19], i1115[20])
  i1114.m_fontColor = new pc.Color(i1115[21], i1115[22], i1115[23], i1115[24])
  i1114.m_enableVertexGradient = !!i1115[25]
  i1114.m_colorMode = i1115[26]
  i1114.m_fontColorGradient = request.d('TMPro.VertexGradient', i1115[27], i1114.m_fontColorGradient)
  request.r(i1115[28], i1115[29], 0, i1114, 'm_fontColorGradientPreset')
  request.r(i1115[30], i1115[31], 0, i1114, 'm_spriteAsset')
  i1114.m_tintAllSprites = !!i1115[32]
  request.r(i1115[33], i1115[34], 0, i1114, 'm_StyleSheet')
  i1114.m_TextStyleHashCode = i1115[35]
  i1114.m_overrideHtmlColors = !!i1115[36]
  i1114.m_faceColor = UnityEngine.Color32.ConstructColor(i1115[37], i1115[38], i1115[39], i1115[40])
  i1114.m_fontSize = i1115[41]
  i1114.m_fontSizeBase = i1115[42]
  i1114.m_fontWeight = i1115[43]
  i1114.m_enableAutoSizing = !!i1115[44]
  i1114.m_fontSizeMin = i1115[45]
  i1114.m_fontSizeMax = i1115[46]
  i1114.m_fontStyle = i1115[47]
  i1114.m_HorizontalAlignment = i1115[48]
  i1114.m_VerticalAlignment = i1115[49]
  i1114.m_textAlignment = i1115[50]
  i1114.m_characterSpacing = i1115[51]
  i1114.m_wordSpacing = i1115[52]
  i1114.m_lineSpacing = i1115[53]
  i1114.m_lineSpacingMax = i1115[54]
  i1114.m_paragraphSpacing = i1115[55]
  i1114.m_charWidthMaxAdj = i1115[56]
  i1114.m_enableWordWrapping = !!i1115[57]
  i1114.m_wordWrappingRatios = i1115[58]
  i1114.m_overflowMode = i1115[59]
  request.r(i1115[60], i1115[61], 0, i1114, 'm_linkedTextComponent')
  request.r(i1115[62], i1115[63], 0, i1114, 'parentLinkedComponent')
  i1114.m_enableKerning = !!i1115[64]
  i1114.m_enableExtraPadding = !!i1115[65]
  i1114.checkPaddingRequired = !!i1115[66]
  i1114.m_isRichText = !!i1115[67]
  i1114.m_parseCtrlCharacters = !!i1115[68]
  i1114.m_isOrthographic = !!i1115[69]
  i1114.m_isCullingEnabled = !!i1115[70]
  i1114.m_horizontalMapping = i1115[71]
  i1114.m_verticalMapping = i1115[72]
  i1114.m_uvLineOffset = i1115[73]
  i1114.m_geometrySortingOrder = i1115[74]
  i1114.m_IsTextObjectScaleStatic = !!i1115[75]
  i1114.m_VertexBufferAutoSizeReduction = !!i1115[76]
  i1114.m_useMaxVisibleDescender = !!i1115[77]
  i1114.m_pageToDisplay = i1115[78]
  i1114.m_margin = new pc.Vec4( i1115[79], i1115[80], i1115[81], i1115[82] )
  i1114.m_isUsingLegacyAnimationComponent = !!i1115[83]
  i1114.m_isVolumetricText = !!i1115[84]
  request.r(i1115[85], i1115[86], 0, i1114, 'm_Material')
  i1114.m_Maskable = !!i1115[87]
  i1114.m_Color = new pc.Color(i1115[88], i1115[89], i1115[90], i1115[91])
  i1114.m_RaycastTarget = !!i1115[92]
  i1114.m_RaycastPadding = new pc.Vec4( i1115[93], i1115[94], i1115[95], i1115[96] )
  return i1114
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i1120 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i1121 = data
  i1120.m_EffectColor = new pc.Color(i1121[0], i1121[1], i1121[2], i1121[3])
  i1120.m_EffectDistance = new pc.Vec2( i1121[4], i1121[5] )
  i1120.m_UseGraphicAlpha = !!i1121[6]
  return i1120
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1122 = root || request.c( 'UnityEngine.UI.Button' )
  var i1123 = data
  i1122.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1123[0], i1122.m_OnClick)
  i1122.m_Navigation = request.d('UnityEngine.UI.Navigation', i1123[1], i1122.m_Navigation)
  i1122.m_Transition = i1123[2]
  i1122.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1123[3], i1122.m_Colors)
  i1122.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1123[4], i1122.m_SpriteState)
  i1122.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1123[5], i1122.m_AnimationTriggers)
  i1122.m_Interactable = !!i1123[6]
  request.r(i1123[7], i1123[8], 0, i1122, 'm_TargetGraphic')
  return i1122
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1124 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1125 = data
  i1124.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1125[0], i1124.m_PersistentCalls)
  return i1124
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1126 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1127 = data
  i1126.m_Mode = i1127[0]
  i1126.m_WrapAround = !!i1127[1]
  request.r(i1127[2], i1127[3], 0, i1126, 'm_SelectOnUp')
  request.r(i1127[4], i1127[5], 0, i1126, 'm_SelectOnDown')
  request.r(i1127[6], i1127[7], 0, i1126, 'm_SelectOnLeft')
  request.r(i1127[8], i1127[9], 0, i1126, 'm_SelectOnRight')
  return i1126
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1129 = data
  i1128.m_NormalColor = new pc.Color(i1129[0], i1129[1], i1129[2], i1129[3])
  i1128.m_HighlightedColor = new pc.Color(i1129[4], i1129[5], i1129[6], i1129[7])
  i1128.m_PressedColor = new pc.Color(i1129[8], i1129[9], i1129[10], i1129[11])
  i1128.m_SelectedColor = new pc.Color(i1129[12], i1129[13], i1129[14], i1129[15])
  i1128.m_DisabledColor = new pc.Color(i1129[16], i1129[17], i1129[18], i1129[19])
  i1128.m_ColorMultiplier = i1129[20]
  i1128.m_FadeDuration = i1129[21]
  return i1128
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1130 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1131 = data
  request.r(i1131[0], i1131[1], 0, i1130, 'm_HighlightedSprite')
  request.r(i1131[2], i1131[3], 0, i1130, 'm_PressedSprite')
  request.r(i1131[4], i1131[5], 0, i1130, 'm_SelectedSprite')
  request.r(i1131[6], i1131[7], 0, i1130, 'm_DisabledSprite')
  return i1130
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1132 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1133 = data
  i1132.m_NormalTrigger = i1133[0]
  i1132.m_HighlightedTrigger = i1133[1]
  i1132.m_PressedTrigger = i1133[2]
  i1132.m_SelectedTrigger = i1133[3]
  i1132.m_DisabledTrigger = i1133[4]
  return i1132
}

Deserializers["PopupEnding"] = function (request, data, root) {
  var i1134 = root || request.c( 'PopupEnding' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'buttonNextLevel')
  request.r(i1135[2], i1135[3], 0, i1134, 'textTotalReward')
  request.r(i1135[4], i1135[5], 0, i1134, 'textDefaultReward')
  request.r(i1135[6], i1135[7], 0, i1134, 'rectTransformNeedle')
  i1134.animCurveNeedle = new pc.AnimationCurve( { keys_flow: i1135[8] } )
  i1134.totalReward = i1135[9]
  request.r(i1135[10], i1135[11], 0, i1134, 'goSkinReward')
  request.r(i1135[12], i1135[13], 0, i1134, 'fillSkinReward')
  request.r(i1135[14], i1135[15], 0, i1134, 'textFillReward')
  request.r(i1135[16], i1135[17], 0, i1134, 'manager')
  return i1134
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1136 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1137 = data
  i1136.m_Spacing = i1137[0]
  i1136.m_ChildForceExpandWidth = !!i1137[1]
  i1136.m_ChildForceExpandHeight = !!i1137[2]
  i1136.m_ChildControlWidth = !!i1137[3]
  i1136.m_ChildControlHeight = !!i1137[4]
  i1136.m_ChildScaleWidth = !!i1137[5]
  i1136.m_ChildScaleHeight = !!i1137[6]
  i1136.m_ReverseArrangement = !!i1137[7]
  i1136.m_Padding = UnityEngine.RectOffset.FromPaddings(i1137[8], i1137[9], i1137[10], i1137[11])
  i1136.m_ChildAlignment = i1137[12]
  return i1136
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1138 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1139 = data
  i1138.m_HorizontalFit = i1139[0]
  i1138.m_VerticalFit = i1139[1]
  return i1138
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1140 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1141 = data
  request.r(i1141[0], i1141[1], 0, i1140, 'm_FirstSelected')
  i1140.m_sendNavigationEvents = !!i1141[2]
  i1140.m_DragThreshold = i1141[3]
  return i1140
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1143 = data
  i1142.m_HorizontalAxis = i1143[0]
  i1142.m_VerticalAxis = i1143[1]
  i1142.m_SubmitButton = i1143[2]
  i1142.m_CancelButton = i1143[3]
  i1142.m_InputActionsPerSecond = i1143[4]
  i1142.m_RepeatDelay = i1143[5]
  i1142.m_ForceModuleActive = !!i1143[6]
  return i1142
}

Deserializers["EventDispatcher"] = function (request, data, root) {
  var i1144 = root || request.c( 'EventDispatcher' )
  var i1145 = data
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1147 = data
  i1146.ambientIntensity = i1147[0]
  i1146.reflectionIntensity = i1147[1]
  i1146.ambientMode = i1147[2]
  i1146.ambientLight = new pc.Color(i1147[3], i1147[4], i1147[5], i1147[6])
  i1146.ambientSkyColor = new pc.Color(i1147[7], i1147[8], i1147[9], i1147[10])
  i1146.ambientGroundColor = new pc.Color(i1147[11], i1147[12], i1147[13], i1147[14])
  i1146.ambientEquatorColor = new pc.Color(i1147[15], i1147[16], i1147[17], i1147[18])
  i1146.fogColor = new pc.Color(i1147[19], i1147[20], i1147[21], i1147[22])
  i1146.fogEndDistance = i1147[23]
  i1146.fogStartDistance = i1147[24]
  i1146.fogDensity = i1147[25]
  i1146.fog = !!i1147[26]
  request.r(i1147[27], i1147[28], 0, i1146, 'skybox')
  i1146.fogMode = i1147[29]
  var i1149 = i1147[30]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1149[i + 0]) );
  }
  i1146.lightmaps = i1148
  i1146.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1147[31], i1146.lightProbes)
  i1146.lightmapsMode = i1147[32]
  i1146.environmentLightingMode = i1147[33]
  i1146.ambientProbe = new pc.SphericalHarmonicsL2(i1147[34])
  request.r(i1147[35], i1147[36], 0, i1146, 'customReflection')
  request.r(i1147[37], i1147[38], 0, i1146, 'defaultReflection')
  i1146.defaultReflectionMode = i1147[39]
  i1146.defaultReflectionResolution = i1147[40]
  i1146.sunLightObjectId = i1147[41]
  i1146.pixelLightCount = i1147[42]
  i1146.defaultReflectionHDR = !!i1147[43]
  i1146.hasLightDataAsset = !!i1147[44]
  i1146.hasManualGenerate = !!i1147[45]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1153 = data
  request.r(i1153[0], i1153[1], 0, i1152, 'lightmapColor')
  request.r(i1153[2], i1153[3], 0, i1152, 'lightmapDirection')
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1154 = root || new UnityEngine.LightProbes()
  var i1155 = data
  return i1154
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1162 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1163 = data
  i1162.useSafeMode = !!i1163[0]
  i1162.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1163[1], i1162.safeModeOptions)
  i1162.timeScale = i1163[2]
  i1162.useSmoothDeltaTime = !!i1163[3]
  i1162.maxSmoothUnscaledTime = i1163[4]
  i1162.rewindCallbackMode = i1163[5]
  i1162.showUnityEditorReport = !!i1163[6]
  i1162.logBehaviour = i1163[7]
  i1162.drawGizmos = !!i1163[8]
  i1162.defaultRecyclable = !!i1163[9]
  i1162.defaultAutoPlay = i1163[10]
  i1162.defaultUpdateType = i1163[11]
  i1162.defaultTimeScaleIndependent = !!i1163[12]
  i1162.defaultEaseType = i1163[13]
  i1162.defaultEaseOvershootOrAmplitude = i1163[14]
  i1162.defaultEasePeriod = i1163[15]
  i1162.defaultAutoKill = !!i1163[16]
  i1162.defaultLoopType = i1163[17]
  i1162.debugMode = !!i1163[18]
  i1162.debugStoreTargetId = !!i1163[19]
  i1162.showPreviewPanel = !!i1163[20]
  i1162.storeSettingsLocation = i1163[21]
  i1162.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1163[22], i1162.modules)
  i1162.createASMDEF = !!i1163[23]
  i1162.showPlayingTweens = !!i1163[24]
  i1162.showPausedTweens = !!i1163[25]
  return i1162
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1164 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1165 = data
  i1164.logBehaviour = i1165[0]
  i1164.nestedTweenFailureBehaviour = i1165[1]
  return i1164
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1166 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1167 = data
  i1166.showPanel = !!i1167[0]
  i1166.audioEnabled = !!i1167[1]
  i1166.physicsEnabled = !!i1167[2]
  i1166.physics2DEnabled = !!i1167[3]
  i1166.spriteEnabled = !!i1167[4]
  i1166.uiEnabled = !!i1167[5]
  i1166.textMeshProEnabled = !!i1167[6]
  i1166.tk2DEnabled = !!i1167[7]
  i1166.deAudioEnabled = !!i1167[8]
  i1166.deUnityExtendedEnabled = !!i1167[9]
  i1166.epoOutlineEnabled = !!i1167[10]
  return i1166
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1168 = root || request.c( 'TMPro.TMP_Settings' )
  var i1169 = data
  i1168.m_enableWordWrapping = !!i1169[0]
  i1168.m_enableKerning = !!i1169[1]
  i1168.m_enableExtraPadding = !!i1169[2]
  i1168.m_enableTintAllSprites = !!i1169[3]
  i1168.m_enableParseEscapeCharacters = !!i1169[4]
  i1168.m_EnableRaycastTarget = !!i1169[5]
  i1168.m_GetFontFeaturesAtRuntime = !!i1169[6]
  i1168.m_missingGlyphCharacter = i1169[7]
  i1168.m_warningsDisabled = !!i1169[8]
  request.r(i1169[9], i1169[10], 0, i1168, 'm_defaultFontAsset')
  i1168.m_defaultFontAssetPath = i1169[11]
  i1168.m_defaultFontSize = i1169[12]
  i1168.m_defaultAutoSizeMinRatio = i1169[13]
  i1168.m_defaultAutoSizeMaxRatio = i1169[14]
  i1168.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1169[15], i1169[16] )
  i1168.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1169[17], i1169[18] )
  i1168.m_autoSizeTextContainer = !!i1169[19]
  i1168.m_IsTextObjectScaleStatic = !!i1169[20]
  var i1171 = i1169[21]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1171.length; i += 2) {
  request.r(i1171[i + 0], i1171[i + 1], 1, i1170, '')
  }
  i1168.m_fallbackFontAssets = i1170
  i1168.m_matchMaterialPreset = !!i1169[22]
  request.r(i1169[23], i1169[24], 0, i1168, 'm_defaultSpriteAsset')
  i1168.m_defaultSpriteAssetPath = i1169[25]
  i1168.m_enableEmojiSupport = !!i1169[26]
  i1168.m_MissingCharacterSpriteUnicode = i1169[27]
  i1168.m_defaultColorGradientPresetsPath = i1169[28]
  request.r(i1169[29], i1169[30], 0, i1168, 'm_defaultStyleSheet')
  i1168.m_StyleSheetsResourcePath = i1169[31]
  request.r(i1169[32], i1169[33], 0, i1168, 'm_leadingCharacters')
  request.r(i1169[34], i1169[35], 0, i1168, 'm_followingCharacters')
  i1168.m_UseModernHangulLineBreakingRules = !!i1169[36]
  return i1168
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1173 = data
  i1172.hashCode = i1173[0]
  request.r(i1173[1], i1173[2], 0, i1172, 'material')
  i1172.materialHashCode = i1173[3]
  request.r(i1173[4], i1173[5], 0, i1172, 'spriteSheet')
  var i1175 = i1173[6]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(request.d('TMPro.TMP_Sprite', i1175[i + 0]));
  }
  i1172.spriteInfoList = i1174
  var i1177 = i1173[7]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1177.length; i += 2) {
  request.r(i1177[i + 0], i1177[i + 1], 1, i1176, '')
  }
  i1172.fallbackSpriteAssets = i1176
  i1172.m_Version = i1173[8]
  i1172.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1173[9], i1172.m_FaceInfo)
  var i1179 = i1173[10]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.add(request.d('TMPro.TMP_SpriteCharacter', i1179[i + 0]));
  }
  i1172.m_SpriteCharacterTable = i1178
  var i1181 = i1173[11]
  var i1180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.add(request.d('TMPro.TMP_SpriteGlyph', i1181[i + 0]));
  }
  i1172.m_SpriteGlyphTable = i1180
  return i1172
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1184 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1185 = data
  i1184.name = i1185[0]
  i1184.hashCode = i1185[1]
  i1184.unicode = i1185[2]
  i1184.pivot = new pc.Vec2( i1185[3], i1185[4] )
  request.r(i1185[5], i1185[6], 0, i1184, 'sprite')
  i1184.id = i1185[7]
  i1184.x = i1185[8]
  i1184.y = i1185[9]
  i1184.width = i1185[10]
  i1184.height = i1185[11]
  i1184.xOffset = i1185[12]
  i1184.yOffset = i1185[13]
  i1184.xAdvance = i1185[14]
  i1184.scale = i1185[15]
  return i1184
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1191 = data
  i1190.m_Name = i1191[0]
  i1190.m_HashCode = i1191[1]
  i1190.m_ElementType = i1191[2]
  i1190.m_Unicode = i1191[3]
  i1190.m_GlyphIndex = i1191[4]
  i1190.m_Scale = i1191[5]
  return i1190
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1194 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1195 = data
  request.r(i1195[0], i1195[1], 0, i1194, 'sprite')
  i1194.m_Index = i1195[2]
  i1194.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1195[3], i1194.m_Metrics)
  i1194.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1195[4], i1194.m_GlyphRect)
  i1194.m_Scale = i1195[5]
  i1194.m_AtlasIndex = i1195[6]
  return i1194
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1197 = data
  var i1199 = i1197[0]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.add(request.d('TMPro.TMP_Style', i1199[i + 0]));
  }
  i1196.m_StyleList = i1198
  return i1196
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.TMP_Style' )
  var i1203 = data
  i1202.m_Name = i1203[0]
  i1202.m_HashCode = i1203[1]
  i1202.m_OpeningDefinition = i1203[2]
  i1202.m_ClosingDefinition = i1203[3]
  i1202.m_OpeningTagArray = i1203[4]
  i1202.m_ClosingTagArray = i1203[5]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1205 = data
  var i1207 = i1205[0]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.add(i1207[i + 0]);
  }
  i1204.invalidShaderVariants = i1206
  i1204.name = i1205[1]
  i1204.guid = i1205[2]
  var i1209 = i1205[3]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( i1209[i + 0] );
  }
  i1204.shaderDefinedKeywords = i1208
  var i1211 = i1205[4]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1211[i + 0]) );
  }
  i1204.passes = i1210
  var i1213 = i1205[5]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1213[i + 0]) );
  }
  i1204.defaultParameterValues = i1212
  request.r(i1205[6], i1205[7], 0, i1204, 'unityFallbackShader')
  i1204.readDepth = !!i1205[8]
  i1204.isCreatedByShaderGraph = !!i1205[9]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1220 = root || new pc.UnityShaderPass()
  var i1221 = data
  i1220.passType = i1221[0]
  i1220.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1221[1], i1220.zTest)
  i1220.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1221[2], i1220.zWrite)
  i1220.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1221[3], i1220.culling)
  i1220.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1221[4], i1220.blending)
  i1220.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1221[5], i1220.alphaBlending)
  i1220.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1221[6], i1220.colorWriteMask)
  i1220.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1221[7], i1220.offsetUnits)
  i1220.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1221[8], i1220.offsetFactor)
  i1220.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1221[9], i1220.stencilRef)
  i1220.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1221[10], i1220.stencilReadMask)
  i1220.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1221[11], i1220.stencilWriteMask)
  i1220.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1221[12], i1220.stencilOp)
  i1220.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1221[13], i1220.stencilOpFront)
  i1220.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1221[14], i1220.stencilOpBack)
  var i1223 = i1221[15]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1223[i + 0]) );
  }
  i1220.tags = i1222
  var i1225 = i1221[16]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( i1225[i + 0] );
  }
  i1220.passDefinedKeywords = i1224
  var i1227 = i1221[17]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1227[i + 0]) );
  }
  i1220.variants = i1226
  i1220.readDepth = !!i1221[18]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1229 = data
  i1228.val = i1229[0]
  i1228.name = i1229[1]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1231 = data
  i1230.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[0], i1230.src)
  i1230.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[1], i1230.dst)
  i1230.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[2], i1230.op)
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1233 = data
  i1232.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[0], i1232.pass)
  i1232.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[1], i1232.fail)
  i1232.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[2], i1232.zFail)
  i1232.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[3], i1232.comp)
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1237 = data
  i1236.name = i1237[0]
  i1236.value = i1237[1]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1241 = data
  var i1243 = i1241[0]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( i1243[i + 0] );
  }
  i1240.keywords = i1242
  i1240.vertexProgram = i1241[1]
  i1240.fragmentProgram = i1241[2]
  i1240.readDepth = !!i1241[3]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1247 = data
  i1246.name = i1247[0]
  i1246.type = i1247[1]
  i1246.value = new pc.Vec4( i1247[2], i1247[3], i1247[4], i1247[5] )
  i1246.textureValue = i1247[6]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1249 = data
  i1248.name = i1249[0]
  request.r(i1249[1], i1249[2], 0, i1248, 'texture')
  i1248.aabb = i1249[3]
  i1248.vertices = i1249[4]
  i1248.triangles = i1249[5]
  i1248.textureRect = UnityEngine.Rect.MinMaxRect(i1249[6], i1249[7], i1249[8], i1249[9])
  i1248.packedRect = UnityEngine.Rect.MinMaxRect(i1249[10], i1249[11], i1249[12], i1249[13])
  i1248.border = new pc.Vec4( i1249[14], i1249[15], i1249[16], i1249[17] )
  i1248.transparency = i1249[18]
  i1248.bounds = i1249[19]
  i1248.pixelsPerUnit = i1249[20]
  i1248.textureWidth = i1249[21]
  i1248.textureHeight = i1249[22]
  i1248.nativeSize = new pc.Vec2( i1249[23], i1249[24] )
  i1248.pivot = new pc.Vec2( i1249[25], i1249[26] )
  i1248.textureRectOffset = new pc.Vec2( i1249[27], i1249[28] )
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1251 = data
  i1250.name = i1251[0]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1253 = data
  i1252.name = i1253[0]
  i1252.wrapMode = i1253[1]
  i1252.isLooping = !!i1253[2]
  i1252.length = i1253[3]
  var i1255 = i1253[4]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1255[i + 0]) );
  }
  i1252.curves = i1254
  var i1257 = i1253[5]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1257[i + 0]) );
  }
  i1252.events = i1256
  i1252.halfPrecision = !!i1253[6]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1261 = data
  i1260.path = i1261[0]
  i1260.componentType = i1261[1]
  i1260.property = i1261[2]
  i1260.keys = i1261[3]
  var i1263 = i1261[4]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1263[i + 0]) );
  }
  i1260.objectReferenceKeys = i1262
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1267 = data
  i1266.time = i1267[0]
  request.r(i1267[1], i1267[2], 0, i1266, 'value')
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1271 = data
  i1270.functionName = i1271[0]
  i1270.floatParameter = i1271[1]
  i1270.intParameter = i1271[2]
  i1270.stringParameter = i1271[3]
  request.r(i1271[4], i1271[5], 0, i1270, 'objectReferenceParameter')
  i1270.time = i1271[6]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1273 = data
  i1272.name = i1273[0]
  i1272.ascent = i1273[1]
  i1272.originalLineHeight = i1273[2]
  i1272.fontSize = i1273[3]
  var i1275 = i1273[4]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1275[i + 0]) );
  }
  i1272.characterInfo = i1274
  request.r(i1273[5], i1273[6], 0, i1272, 'texture')
  i1272.originalFontSize = i1273[7]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1279 = data
  i1278.index = i1279[0]
  i1278.advance = i1279[1]
  i1278.bearing = i1279[2]
  i1278.glyphWidth = i1279[3]
  i1278.glyphHeight = i1279[4]
  i1278.minX = i1279[5]
  i1278.maxX = i1279[6]
  i1278.minY = i1279[7]
  i1278.maxY = i1279[8]
  i1278.uvBottomLeftX = i1279[9]
  i1278.uvBottomLeftY = i1279[10]
  i1278.uvBottomRightX = i1279[11]
  i1278.uvBottomRightY = i1279[12]
  i1278.uvTopLeftX = i1279[13]
  i1278.uvTopLeftY = i1279[14]
  i1278.uvTopRightX = i1279[15]
  i1278.uvTopRightY = i1279[16]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1281 = data
  i1280.name = i1281[0]
  var i1283 = i1281[1]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1283[i + 0]) );
  }
  i1280.states = i1282
  var i1285 = i1281[2]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1285[i + 0]) );
  }
  i1280.layers = i1284
  var i1287 = i1281[3]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1287[i + 0]) );
  }
  i1280.parameters = i1286
  var i1289 = i1281[4]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( i1289[i + 0] );
  }
  i1280.animationClips = i1288
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1293 = data
  i1292.cycleOffset = i1293[0]
  i1292.cycleOffsetParameter = i1293[1]
  i1292.cycleOffsetParameterActive = !!i1293[2]
  i1292.mirror = !!i1293[3]
  i1292.mirrorParameter = i1293[4]
  i1292.mirrorParameterActive = !!i1293[5]
  i1292.motionId = i1293[6]
  i1292.nameHash = i1293[7]
  i1292.fullPathHash = i1293[8]
  i1292.speed = i1293[9]
  i1292.speedParameter = i1293[10]
  i1292.speedParameterActive = !!i1293[11]
  i1292.tag = i1293[12]
  i1292.name = i1293[13]
  i1292.writeDefaultValues = !!i1293[14]
  var i1295 = i1293[15]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1295[i + 0]) );
  }
  i1292.transitions = i1294
  var i1297 = i1293[16]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 2) {
  request.r(i1297[i + 0], i1297[i + 1], 2, i1296, '')
  }
  i1292.behaviours = i1296
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1301 = data
  i1300.fullPath = i1301[0]
  i1300.canTransitionToSelf = !!i1301[1]
  i1300.duration = i1301[2]
  i1300.exitTime = i1301[3]
  i1300.hasExitTime = !!i1301[4]
  i1300.hasFixedDuration = !!i1301[5]
  i1300.interruptionSource = i1301[6]
  i1300.offset = i1301[7]
  i1300.orderedInterruption = !!i1301[8]
  i1300.destinationStateNameHash = i1301[9]
  i1300.destinationStateMachineId = i1301[10]
  i1300.isExit = !!i1301[11]
  i1300.mute = !!i1301[12]
  i1300.solo = !!i1301[13]
  var i1303 = i1301[14]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1303[i + 0]) );
  }
  i1300.conditions = i1302
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1307 = data
  i1306.mode = i1307[0]
  i1306.parameter = i1307[1]
  i1306.threshold = i1307[2]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1313 = data
  i1312.blendingMode = i1313[0]
  i1312.defaultWeight = i1313[1]
  i1312.name = i1313[2]
  i1312.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1313[3], i1312.stateMachine)
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1315 = data
  i1314.id = i1315[0]
  i1314.defaultStateNameHash = i1315[1]
  var i1317 = i1315[2]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1317[i + 0]) );
  }
  i1314.entryTransitions = i1316
  var i1319 = i1315[3]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1319[i + 0]) );
  }
  i1314.anyStateTransitions = i1318
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1323 = data
  i1322.destinationStateNameHash = i1323[0]
  i1322.destinationStateMachineId = i1323[1]
  i1322.isExit = !!i1323[2]
  i1322.mute = !!i1323[3]
  i1322.solo = !!i1323[4]
  var i1325 = i1323[5]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1325[i + 0]) );
  }
  i1322.conditions = i1324
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1329 = data
  i1328.defaultBool = !!i1329[0]
  i1328.defaultFloat = i1329[1]
  i1328.defaultInt = i1329[2]
  i1328.name = i1329[3]
  i1328.nameHash = i1329[4]
  i1328.type = i1329[5]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1331 = data
  i1330.name = i1331[0]
  i1330.bytes64 = i1331[1]
  i1330.data = i1331[2]
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1333 = data
  var i1335 = i1333[0]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1335[i + 0]) );
  }
  i1332.files = i1334
  i1332.componentToPrefabIds = i1333[1]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1339 = data
  i1338.path = i1339[0]
  request.r(i1339[1], i1339[2], 0, i1338, 'unityObject')
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1341 = data
  var i1343 = i1341[0]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1343[i + 0]) );
  }
  i1340.scriptsExecutionOrder = i1342
  var i1345 = i1341[1]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1345[i + 0]) );
  }
  i1340.sortingLayers = i1344
  var i1347 = i1341[2]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1347[i + 0]) );
  }
  i1340.cullingLayers = i1346
  i1340.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1341[3], i1340.timeSettings)
  i1340.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1341[4], i1340.physicsSettings)
  i1340.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1341[5], i1340.physics2DSettings)
  i1340.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1341[6], i1340.qualitySettings)
  i1340.removeShadows = !!i1341[7]
  i1340.autoInstantiatePrefabs = !!i1341[8]
  i1340.enableAutoInstancing = !!i1341[9]
  i1340.lightmapEncodingQuality = i1341[10]
  i1340.desiredColorSpace = i1341[11]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1351 = data
  i1350.name = i1351[0]
  i1350.value = i1351[1]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1355 = data
  i1354.id = i1355[0]
  i1354.name = i1355[1]
  i1354.value = i1355[2]
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1359 = data
  i1358.id = i1359[0]
  i1358.name = i1359[1]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1361 = data
  i1360.fixedDeltaTime = i1361[0]
  i1360.maximumDeltaTime = i1361[1]
  i1360.timeScale = i1361[2]
  i1360.maximumParticleTimestep = i1361[3]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1363 = data
  i1362.gravity = new pc.Vec3( i1363[0], i1363[1], i1363[2] )
  i1362.defaultSolverIterations = i1363[3]
  i1362.bounceThreshold = i1363[4]
  i1362.autoSyncTransforms = !!i1363[5]
  i1362.autoSimulation = !!i1363[6]
  var i1365 = i1363[7]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1365[i + 0]) );
  }
  i1362.collisionMatrix = i1364
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1369 = data
  i1368.enabled = !!i1369[0]
  i1368.layerId = i1369[1]
  i1368.otherLayerId = i1369[2]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1371 = data
  request.r(i1371[0], i1371[1], 0, i1370, 'material')
  i1370.gravity = new pc.Vec2( i1371[2], i1371[3] )
  i1370.positionIterations = i1371[4]
  i1370.velocityIterations = i1371[5]
  i1370.velocityThreshold = i1371[6]
  i1370.maxLinearCorrection = i1371[7]
  i1370.maxAngularCorrection = i1371[8]
  i1370.maxTranslationSpeed = i1371[9]
  i1370.maxRotationSpeed = i1371[10]
  i1370.timeToSleep = i1371[11]
  i1370.linearSleepTolerance = i1371[12]
  i1370.angularSleepTolerance = i1371[13]
  i1370.defaultContactOffset = i1371[14]
  i1370.autoSimulation = !!i1371[15]
  i1370.queriesHitTriggers = !!i1371[16]
  i1370.queriesStartInColliders = !!i1371[17]
  i1370.callbacksOnDisable = !!i1371[18]
  i1370.reuseCollisionCallbacks = !!i1371[19]
  i1370.autoSyncTransforms = !!i1371[20]
  var i1373 = i1371[21]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1373[i + 0]) );
  }
  i1370.collisionMatrix = i1372
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1377 = data
  i1376.enabled = !!i1377[0]
  i1376.layerId = i1377[1]
  i1376.otherLayerId = i1377[2]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1379 = data
  var i1381 = i1379[0]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1381[i + 0]) );
  }
  i1378.qualityLevels = i1380
  var i1383 = i1379[1]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( i1383[i + 0] );
  }
  i1378.names = i1382
  i1378.shadows = i1379[2]
  i1378.anisotropicFiltering = i1379[3]
  i1378.antiAliasing = i1379[4]
  i1378.lodBias = i1379[5]
  i1378.shadowCascades = i1379[6]
  i1378.shadowDistance = i1379[7]
  i1378.shadowmaskMode = i1379[8]
  i1378.shadowProjection = i1379[9]
  i1378.shadowResolution = i1379[10]
  i1378.softParticles = !!i1379[11]
  i1378.softVegetation = !!i1379[12]
  i1378.activeColorSpace = i1379[13]
  i1378.desiredColorSpace = i1379[14]
  i1378.masterTextureLimit = i1379[15]
  i1378.maxQueuedFrames = i1379[16]
  i1378.particleRaycastBudget = i1379[17]
  i1378.pixelLightCount = i1379[18]
  i1378.realtimeReflectionProbes = !!i1379[19]
  i1378.shadowCascade2Split = i1379[20]
  i1378.shadowCascade4Split = new pc.Vec3( i1379[21], i1379[22], i1379[23] )
  i1378.streamingMipmapsActive = !!i1379[24]
  i1378.vSyncCount = i1379[25]
  i1378.asyncUploadBufferSize = i1379[26]
  i1378.asyncUploadTimeSlice = i1379[27]
  i1378.billboardsFaceCameraPosition = !!i1379[28]
  i1378.shadowNearPlaneOffset = i1379[29]
  i1378.streamingMipmapsMemoryBudget = i1379[30]
  i1378.maximumLODLevel = i1379[31]
  i1378.streamingMipmapsAddAllCameras = !!i1379[32]
  i1378.streamingMipmapsMaxLevelReduction = i1379[33]
  i1378.streamingMipmapsRenderersPerFrame = i1379[34]
  i1378.resolutionScalingFixedDPIFactor = i1379[35]
  i1378.streamingMipmapsMaxFileIORequests = i1379[36]
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1389 = data
  i1388.weight = i1389[0]
  i1388.vertices = i1389[1]
  i1388.normals = i1389[2]
  i1388.tangents = i1389[3]
  return i1388
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1390 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1391 = data
  i1390.xPlacement = i1391[0]
  i1390.yPlacement = i1391[1]
  i1390.xAdvance = i1391[2]
  i1390.yAdvance = i1391[3]
  return i1390
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"time":4,"volume":5,"pitch":6,"enabled":7},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CharacterJoint":{"swingAxis":0,"twistLimitSpring":3,"swingLimitSpring":4,"lowTwistLimit":5,"highTwistLimit":6,"swing1Limit":7,"swing2Limit":8,"connectedBody":9,"axis":11,"anchor":14,"connectedAnchor":17,"autoConfigureConnectedAnchor":20,"massScale":21,"connectedMassScale":22,"enableCollision":23,"breakForce":24,"breakTorque":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"defaultParameterValues":5,"unityFallbackShader":6,"readDepth":8,"isCreatedByShaderGraph":9},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"passDefinedKeywords":16,"variants":17,"readDepth":18},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2,"readDepth":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[2],"79":[37],"80":[32],"81":[32],"82":[32],"83":[32],"84":[32],"34":[32],"85":[32],"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[87],"94":[87],"95":[87],"96":[87],"97":[87],"98":[87],"99":[87],"100":[37],"101":[9],"102":[103],"104":[103],"51":[16],"105":[16],"106":[17,16],"107":[9],"108":[17,16],"109":[16],"26":[9,16],"56":[16,17],"110":[16],"111":[16],"112":[16],"53":[51],"19":[17,16],"113":[16],"52":[51],"61":[16],"114":[16],"115":[16],"116":[16],"117":[16],"118":[16],"60":[16],"119":[16],"120":[16],"121":[17,16],"122":[16],"123":[16],"124":[16],"125":[16],"21":[17,16],"126":[16],"127":[62],"128":[62],"63":[62],"129":[62],"130":[37],"131":[37]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioSource","UnityEngine.AudioClip","TMPro.TMP_FontAsset","UnityEngine.Font","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.UI.Outline","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","ItemController","TMPro.TextMeshPro","UnityEngine.MeshCollider","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","EnemyController","UnityEngine.GameObject","UnityEngine.Rigidbody","UnityEngine.CapsuleCollider","UnityEngine.CharacterJoint","UnityEngine.SphereCollider","FighterController","UnityEngine.Camera","UnityEngine.AudioListener","CameraFollow","BossController","MultiController","UnityEngine.Light","PlayerController","CharacterController","ClampScore","GameManager","GameUIManager","PanelFighting","MapManager","SoundController","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","CanvasScalerMatch","UnityEngine.EventSystems.EventTrigger","TMPro.TextMeshProUGUI","UnityEngine.UI.Shadow","UnityEngine.UI.Button","PopupEnding","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","EventDispatcher","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2020.3.24f1";

Deserializers.productName = "Human-Playable";

Deserializers.lunaInitializationTime = "03/21/2022 15:13:44";

Deserializers.lunaVersion = "3.2.0";

Deserializers.lunaSHA = "9700e7eb48cc51ced8babec93160730d94cc2203";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 2.0.0,com.unity.collab-proxy: 1.15.4,com.unity.ide.rider: 2.0.7,com.unity.ide.visualstudio: 2.0.12,com.unity.ide.vscode: 1.2.4,com.unity.test-framework: 1.1.29,com.unity.textmeshpro: 3.0.0,com.unity.timeline: 1.4.8,com.unity.ugui: 1.0.0,uk.lunalabs.luna: file:D:/Studio Projects/Projects/Luna/scripts,com.unity.modules.ai: 1.0.0,com.unity.modules.androidjni: 1.0.0,com.unity.modules.animation: 1.0.0,com.unity.modules.assetbundle: 1.0.0,com.unity.modules.audio: 1.0.0,com.unity.modules.cloth: 1.0.0,com.unity.modules.director: 1.0.0,com.unity.modules.imageconversion: 1.0.0,com.unity.modules.imgui: 1.0.0,com.unity.modules.jsonserialize: 1.0.0,com.unity.modules.particlesystem: 1.0.0,com.unity.modules.physics: 1.0.0,com.unity.modules.physics2d: 1.0.0,com.unity.modules.screencapture: 1.0.0,com.unity.modules.terrain: 1.0.0,com.unity.modules.terrainphysics: 1.0.0,com.unity.modules.tilemap: 1.0.0,com.unity.modules.ui: 1.0.0,com.unity.modules.uielements: 1.0.0,com.unity.modules.umbra: 1.0.0,com.unity.modules.unityanalytics: 1.0.0,com.unity.modules.unitywebrequest: 1.0.0,com.unity.modules.unitywebrequestassetbundle: 1.0.0,com.unity.modules.unitywebrequestaudio: 1.0.0,com.unity.modules.unitywebrequesttexture: 1.0.0,com.unity.modules.unitywebrequestwww: 1.0.0,com.unity.modules.vehicles: 1.0.0,com.unity.modules.video: 1.0.0,com.unity.modules.vr: 1.0.0,com.unity.modules.wind: 1.0.0,com.unity.modules.xr: 1.0.0";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.HumanPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "5d2279b7-6c0a-4a89-b39c-1da00c4b5432";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

