using System;
using UnityEngine;

public static class EventDispatcherExtension
{
    public static void RegisterListener(
      this MonoBehaviour listener,
      int eventID,
      Action<object> callback,
      DispatcherType eventType = DispatcherType.Normal)
    {
        LazySingleton<EventDispatcher>.Instance.RegisterListener(eventID, callback, eventType);
    }

    public static void PostEvent(this MonoBehaviour listener, int eventID, object param) => LazySingleton<EventDispatcher>.Instance.PostEvent(eventID, param);

    public static void PostEvent(this MonoBehaviour sender, int eventID) => LazySingleton<EventDispatcher>.Instance.PostEvent(eventID);
}