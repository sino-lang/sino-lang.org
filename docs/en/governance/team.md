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
    name: 'Taissan',
    title: 'Creator',
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
      Team
    </template>
    <template #lead>
      The development of Sino is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>