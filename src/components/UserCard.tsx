import React from 'react'
import styles from '@/styles/UserCard.module.scss'

type UserCardProps = {
  name: string
  email: string
  phone: string
  website: string
  address: string
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  email,
  phone,
  website,
  address,
}) => {
  return (
    <div className={styles.userCard}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>
        Website:{' '}
        <a href={`http://${website}`} target="_blank">
          {website}
        </a>
      </p>
      <p>Address: {address}</p>
    </div>
  )
}

export default UserCard
