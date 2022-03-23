using UnityEngine;
using TMPro;

public enum TypeCalculate
{
    Plus, Minus, Multiply, Divide
}
public enum TypeTimeUnit
{
    Month, Year
}
public enum TypeMotion
{
    Static, Motion
}
public class ItemController : MonoBehaviour
{
    public TypeCalculate typeCalculate;
    public TypeTimeUnit typeTimeUnit;
    public TypeMotion typeMotion;
    private Vector3 dirMotion;
    public int totalTime;
    public TextMeshPro textTime, textUnit;

    public Material portalGood, portalBad;

    // Start is called before the first frame update
    void Start()
    {
        //dirMotion = Vector3.right;
        //SetItemValue();
    }

    // Update is called once per frame
    void Update()
    {
        //if(typeMotion == TypeMotion.Motion)
        //{
        //    transform.Translate(dirMotion * Time.deltaTime, Space.World);
        //    if (transform.position.x <= -0.75f)
        //        dirMotion = Vector3.right;
        //    if (transform.position.x >= 0.75f)
        //        dirMotion = Vector3.left;
        //}
    }
    public void SetItemValue()
    {
        if (typeCalculate == TypeCalculate.Plus || typeCalculate == TypeCalculate.Multiply)
            transform.GetChild(0).GetComponent<MeshRenderer>().material = portalGood;
        else
            transform.GetChild(0).GetComponent<MeshRenderer>().material = portalBad;
        textTime.text = GetTypeCalculateSign() + totalTime;
        textUnit.text = typeTimeUnit.ToString() + "s";
        ConvertTime();
    }
    public void ConvertTime()
    {
        if (typeTimeUnit == TypeTimeUnit.Month)
            totalTime /= 12;
    }
    public string GetTypeCalculateSign()
    {
        string sign = "";
        switch (typeCalculate)
        {
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
                sign = "÷";
                break;
        }
        return sign;
    }
}
