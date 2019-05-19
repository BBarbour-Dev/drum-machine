import boom from './sounds/boom.wav'
import snare from './sounds/snare.wav'
import hihat from './sounds/hihat.wav'
import kick from './sounds/kick.wav'
import openhat from './sounds/openhat.wav'
import ride from './sounds/ride.wav'
import clap from './sounds/clap.wav'
import tink from './sounds/tink.wav'
import tom from './sounds/tom.wav'

export const DrumData = [
  {
    key: 'Q',
    keyCode: '81',
    src: boom,
    name: 'Boom'
  },
  {
    key: 'W',
    keyCode: '87',
    src: snare,
    name: 'Snare'
  },
  {
    key: 'E',
    keyCode: '69',
    src: hihat,
    name: 'Hi-Hat'
  },
  {
    key: 'A',
    keyCode: '65',
    src: kick,
    name: 'Kick'
  },
  {
    key: 'S',
    keyCode: '83',
    src: openhat,
    name: 'Open Hat'
  },
  {
    key: 'D',
    keyCode: '68',
    src: ride,
    name: 'Ride'
  },
  {
    key: 'Z',
    keyCode: '90',
    src: clap,
    name: 'Clap'
  },
  {
    key: 'X',
    keyCode: '88',
    src: tink,
    name: 'Tink'
  },
  {
    key: 'C',
    keyCode: '67',
    src: tom,
    name: 'Tom'
  }
]
