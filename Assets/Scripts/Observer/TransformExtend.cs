using System.Collections.Generic;
using UnityEngine;

public static class TransformExtend
{
    public static List<Transform> GetChilds(this Transform transform)
    {
        List<Transform> list = new List<Transform>();
        int num = transform.childCount;
        for (int i = 0; i < num; i++)
        {
            list.Add(transform.GetChild(i));
        }
        return list;
    }
}
