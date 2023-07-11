import React, { memo } from 'react'

// MAIN 10
import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoJavascript } from 'react-icons/bi'
import { BiLogoCss3 } from 'react-icons/bi'
import { BiLogoReact } from 'react-icons/bi'
import { BiLogoRedux } from 'react-icons/bi'
import { BiLogoTypescript } from 'react-icons/bi'
import { BiLogoSass } from 'react-icons/bi'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { BiLogoGit } from 'react-icons/bi'
import { BiLogoGraphql } from 'react-icons/bi'
import { TbCurrencySolana } from 'react-icons/tb'

// OTHER 7
import { BiLogoJquery } from 'react-icons/bi'
import { BiLogoNodejs } from 'react-icons/bi'
import { BiLogoMongodb } from 'react-icons/bi'
import { BiLogoVuejs } from 'react-icons/bi'
import { BiLogoPhp } from 'react-icons/bi'
import { SiMysql } from 'react-icons/si'
import { FaLaravel } from 'react-icons/fa'
import { SiApachecordova } from 'react-icons/si'

const mainSkills = [
  AiFillHtml5,
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTypescript,
  BiLogoSass,
  BiLogoTailwindCss,
  BiLogoGraphql,
  TbCurrencySolana,
  BiLogoGit
]

import Icon from './Icon'
import { IconType } from 'react-icons/lib'

const icons = () =>
  mainSkills.map((skill: IconType, ind: number) => (
    <Icon key={ind} Icon={skill} />
  ))

const Icons = () => {
  return <div>{icons()}</div>
}

export default memo(Icons)
