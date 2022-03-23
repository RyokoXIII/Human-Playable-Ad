using UnityEngine;
using TMPro;

public class MultiController : MonoBehaviour
{
    public GameObject ground;
    public TextMeshPro textMulti, textMulti2;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public Material bonus;

    public void LoadMulti(int id)
    {
        //ground.GetComponent<MeshRenderer>().material = Resources.Load<Material>("Materials/Bonus/Bonus " + (id + 1));
        ground.GetComponent<MeshRenderer>().material = bonus;
        float multi = 1 + id * 0.1f;
        textMulti.text = multi.ToString("0.0");
        textMulti2.text = multi.ToString("0.0");
    }
}
