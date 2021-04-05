import axios from 'axios'
const KEY = 'AIzaSyA3g0MpPxWOSniNx8NEhgnEm8t1LGrFlrc'


export default (search)  =>axios.get (`https://www.googleapis.com/youtube/v3/search?key=${KEY}&type=video&part=snippet&maxResults=10&q=${search}`)
