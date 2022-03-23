using UnityEngine;

public class ClampScore : MonoBehaviour
{
    [SerializeField] GameObject goScore;
    // Start is called before the first frame update
    void Start()
    {
        goScore.transform.position = Camera.main.WorldToScreenPoint(transform.position);
    }

    // Update is called once per frame
    void FixedUpdate()
    {
        Vector3 pos = Camera.main.WorldToScreenPoint(this.transform.position);
        goScore.transform.position = pos;
    }
}
