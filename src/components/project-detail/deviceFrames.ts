import smartphone from '../../assets/images/smartphone.png'
import computer from '../../assets/images/computer.png'
import type { ScreenRect } from './DeviceMockup'

interface DeviceFrame {
  frame: string
  aspectRatio: string
  screen: ScreenRect
  maxWidth: string
}

// Screen rects are the original site's px cutouts expressed as percentages of each frame
// (architecture doc §6, rule 5), so a frame resize scales the screen with it.
export const PHONE: DeviceFrame = {
  frame: smartphone,
  aspectRatio: '254 / 484',
  screen: { top: '9.9%', left: '6.6%', width: '88.9%', height: '78.4%' },
  maxWidth: '22rem',
}

export const COMPUTER: DeviceFrame = {
  frame: computer,
  aspectRatio: '1 / 1',
  screen: { top: '8.9%', left: '15.1%', width: '70%', height: '38.9%' },
  maxWidth: '46rem',
}
