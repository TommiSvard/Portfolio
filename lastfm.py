import pylast
from pylast import *
from key import *

API_KEY = apiKey
API_SECRET = secret

username = uname
password_hash = pylast.md5(pword)

network = pylast.LastFMNetwork(api_key=API_KEY, api_secret=API_SECRET,
                               username=username, password_hash=password_hash)

user = network.get_user(uname)
playCount = network.get_user(uname).get_playcount()

#Let's user see if i've listened to a artist.
#If i have it will return the latest song i listened to with that artist.
#And the date i listenet to the song.
#Else return "I haven't listened to that artist".
def listenedArtists(name):
    getArtistTracks = network.get_user(uname).get_artist_tracks(name)
    if len(getArtistTracks) > 0:
        return getArtistTracks[0][0], getArtistTracks[0][2]
    else:
        return "Nej jag har inte lyssnat på den här artisten"

#Checks if im listening at music
#Returns a nicer message than "None".
def currentlyListening():
    nowPlaying = network.get_user(uname).get_now_playing()
    if nowPlaying == None:
        return "Lyssnar inte på musik för tillfället"
    else:
        return nowPlaying

#Returns cleaned up data of my latest "Loved track".
def latestLoved():
    lovedTracks = network.get_user(uname).get_loved_tracks()
    return lovedTracks[0][0]



