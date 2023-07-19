import React, { memo } from 'react'

import Icon from './Icon'
import { IconT } from './types'

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

const mainSkills: IconT[] = [
  { Icon: AiFillHtml5, name: 'HTML5', color: 'orange-400' },
  { Icon: BiLogoJavascript, name: 'JavaScript', color: 'yellow-400' },
  { Icon: BiLogoCss3, name: 'CSS3', color: 'blue-500' },
  { Icon: BiLogoReact, name: 'React', color: 'sky-400' },
  { Icon: BiLogoRedux, name: 'Redux', color: 'violet-500' },
  { Icon: BiLogoTypescript, name: 'TypeScript', color: 'blue-600' },
  { Icon: BiLogoSass, name: 'SASS', color: 'pink-300' },
  { Icon: BiLogoTailwindCss, name: 'Tailwind', color: 'blue-300' },
  { Icon: BiLogoGraphql, name: 'GraphQL', color: 'pink-400' },
  { Icon: TbCurrencySolana, name: 'Solana Dev', color: 'cyan-500' },
  { Icon: BiLogoGit, name: 'Git', color: 'orange-400' }
]

const icons = () =>
  mainSkills.map((skill: IconT) => (
    <Icon
      key={skill.name}
      Icon={skill.Icon}
      name={skill.name}
      color={skill.color}
    />
  ))

const Icons = () => {
  return <div>{icons()}</div>
}

export default memo(Icons)
