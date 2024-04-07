---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/cnsino.png',
    name: '泰山',
    title: '创建者',
    links: [
      { icon: 'github', link: 'https://github.com/cnsino' },
    //   { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
//   ...
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      团队
    </template>
    <template #lead>
      Sino 的发展受到国际化的指导
       团队，其中一些人选择在下面进行介绍。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>