using System;
using System.Collections.Generic;

public class EventDispatcher : LazySingleton<EventDispatcher>
{
    private Dictionary<int, Action<object>> _earlyListeners = new Dictionary<int, Action<object>>();
    private Dictionary<int, Action<object>> _lateListeners = new Dictionary<int, Action<object>>();
    private Dictionary<int, Action<object>> _normalListeners = new Dictionary<int, Action<object>>();

    public void RegisterListener(int eventID, Action<object> callback, DispatcherType eventType = DispatcherType.Normal)
    {
        switch (eventType)
        {
            case DispatcherType.Early:
                this.RegisterListener(this._earlyListeners, eventID, callback);
                break;
            case DispatcherType.Normal:
                this.RegisterListener(this._normalListeners, eventID, callback);
                break;
            case DispatcherType.Late:
                this.RegisterListener(this._lateListeners, eventID, callback);
                break;
        }
    }

    private void RegisterListener(
      Dictionary<int, Action<object>> listener,
      int eventID,
      Action<object> callback)
    {
        if (listener.ContainsKey(eventID))
        {
            listener[eventID] += callback;
        }
        else
        {
            listener.Add(eventID, (Action<object>)null);
            listener[eventID] += callback;
        }
    }

    public void PostEvent(int eventID, object param = null)
    {
        this.PostEvent(this._earlyListeners, eventID, param);
        this.PostEvent(this._normalListeners, eventID, param);
        this.PostEvent(this._lateListeners, eventID, param);
    }

    private void PostEvent(Dictionary<int, Action<object>> listener, int eventID, object param = null)
    {
        if (!listener.ContainsKey(eventID))
            return;
        Action<object> action = listener[eventID];
        if (action != null)
            action(param);
        else
            listener.Remove(eventID);
    }

    public void RemoveListener(int eventID, Action<object> callback)
    {
        this.RemoveListener(this._earlyListeners, eventID, callback);
        this.RemoveListener(this._normalListeners, eventID, callback);
        this.RemoveListener(this._lateListeners, eventID, callback);
    }

    private void RemoveListener(
      Dictionary<int, Action<object>> listener,
      int eventID,
      Action<object> callback)
    {
        if (!listener.ContainsKey(eventID))
            return;
        listener[eventID] -= callback;
    }

    public void ClearAllListener()
    {
        this._earlyListeners.Clear();
        this._normalListeners.Clear();
        this._lateListeners.Clear();
    }
}