using UnityEngine;


public abstract class LazySingleton<T> : MonoBehaviour where T:MonoBehaviour
{
    //Fields
    private static bool singletonDestroyed;
    private static T instance;

    //Methods
    protected LazySingleton()
    {

    }
    protected virtual void Awake()
    {
        if((LazySingleton<T>.instance == null) && !LazySingleton<T>.singletonDestroyed){
            LazySingleton<T>.instance = this as T;
        }
        else if(LazySingleton<T>.instance != this)
        {
            UnityEngine.Object.Destroy(this);
        }
    }
    protected virtual void OnDestroy()
    {
        if(LazySingleton<T>.instance == this)
        {
            LazySingleton<T>.singletonDestroyed = true;
            LazySingleton<T>.instance = default(T);
        }
    }
    //Properties
    public static T Instance
    {
        get
        {
            if (LazySingleton<T>.singletonDestroyed)
            {
                //Debug.LogWarningFormat("[Singleton] Singleton was already destroyed by quiting game. Returning null", Array.Empty<object>());
                return default(T);
            }
            if (!LazySingleton<T>.instance)
            {
                new GameObject(typeof(T).ToString()).AddComponent<T>();
            }
            return LazySingleton<T>.instance;
        }
    }
}