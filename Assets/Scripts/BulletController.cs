using System.Collections;
using UnityEngine;

public class BulletController : MonoBehaviour
{
    public float speed = 10;
    public float timeDisappear = 2;


    void Start()
    {
        //StartCoroutine(CoDisappear());
    }

    void Update()
    {
        transform.Translate(Vector3.forward * Time.deltaTime * speed, Space.World);       
    }
    
    IEnumerator CoDisappear()
    {
        yield return new WaitForSeconds(timeDisappear);
        gameObject.SetActive(false);
    }
}
