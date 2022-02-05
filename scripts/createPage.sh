cd src/pages

echo "export { $1 } from './$1/$1'" >> index.ts

mkdir -p $1
cd $1
mkdir -p components
cat <<EOT >> $1.tsx
import type { FC } from 'react'

export const $1: FC = () => {
  return (
    <div className='default-page'>
      <p>
        $1
      </p>
    </div>
  )
}
EOT

cat <<EOT >> api.ts
export const useApi = () => {
  return null
}
EOT

code $1.tsx
