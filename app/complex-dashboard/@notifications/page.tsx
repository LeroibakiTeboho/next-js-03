import Card from '@/components/card'
import Link from 'next/link'
import React from 'react'


function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  )
}

export default Notifications