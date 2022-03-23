using UnityEngine;
using DG.Tweening;

public class CameraFollow : MonoBehaviour
{
    public Transform target;            // The position that that camera will be following.
    public float smoothing = 5f;        // The speed with which the camera will be following.

    Vector3 offset;                     // The initial offset from the target.

    public bool isLook = false;

    void Start()
    {
        // Calculate initial offset.
        offset = transform.position - target.position;
    }

    void LateUpdate()
    {
        if (!isLook)
        {
            // Create a postion the camera is aiming for based on the offset from the target.
            Vector3 targetCamPos = target.position + offset;

            // Smoothly interpolate between camera's current position and it's target position.
            transform.position = Vector3.Lerp(transform.position, targetCamPos, smoothing * Time.deltaTime);
        }       
    }

    private void Update()
    {
        if (isLook)
            transform.DOLookAt(target.position, 0.2f).SetEase(Ease.Linear);
    }
}
