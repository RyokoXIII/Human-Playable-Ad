using UnityEngine;

public class PanelFighting : MonoBehaviour
{
    public static PanelFighting Instance;
    public bool isFighting = false;
    public GameObject hpBarPlayer, hpBarEnemy;

    public GameObject[] skins;

    // Start is called before the first frame update
    void Start()
    {
        Instance = this;
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
