using System.Collections;
using UnityEngine;

public class SoundController : MonoBehaviour
{
    public static SoundController Instance;
    public AudioSource audioMusic;
    [SerializeField] AudioSource audioSound;
    [Header("-----Attack Sound-----")]
    public AudioClip sound_melee;
    public AudioClip sound_bravo;
    public AudioClip sound_upgrade;
    public AudioClip sound_click_button;
    public float volumeMusic = 1;

    void Start()
    {
        Instance = this;
        audioMusic.volume = 0;        
        PlayMusicBgr();
    }

    IEnumerator delayVolume = null;
    public void PlayMusicBgr()
    {
        if (delayVolume != null)
            StopCoroutine(delayVolume);
        delayVolume = DelayLoadVolumeMusic();
        StartCoroutine(delayVolume);

        if (!audioMusic.isPlaying)
        {
            audioMusic.Play();
        }
    }

    IEnumerator DelayLoadVolumeMusic()
    {
        yield return new WaitForSeconds(0.02f);
        if (PlayerPrefs.GetInt("musicState") == 0)
        {
            if (audioMusic.volume < volumeMusic)
            {
                audioMusic.volume += .1f;
                delayVolume = DelayLoadVolumeMusic();
                StartCoroutine(delayVolume);
            }
        }
        else
        {
            if (audioMusic.volume > 0)
            {
                audioMusic.volume -= .1f;
                delayVolume = DelayLoadVolumeMusic();
                StartCoroutine(delayVolume);
            }
        }
    }

    public void PlaySoundByClip(AudioClip audio)
    {
        if (PlayerPrefs.GetInt("soundState") == 0)
        {
            audioSound.volume = 1;
        }
        else
        {
            audioSound.volume = 0;
        }
        audioSound.clip = audio;
        audioSound.Play();
    }
}
