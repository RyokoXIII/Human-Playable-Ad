using UnityEngine;
using UnityEngine.UI;

public class CanvasScalerMatch : MonoBehaviour
{
    [SerializeField] CanvasScaler[] arAanvasScaler;
    private void OnEnable()
    {
        if (Camera.main.aspect >= 0.65f)
        {
            Debug.Log("man may tinh bang");
            foreach (CanvasScaler scaler in arAanvasScaler)
                scaler.matchWidthOrHeight = 1;
        }
        else
        {
            Debug.Log("man dien thoai");
            foreach (CanvasScaler scaler in arAanvasScaler)
                scaler.matchWidthOrHeight = 0;
        }
    }
}
