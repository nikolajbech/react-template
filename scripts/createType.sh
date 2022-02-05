cd src/types
echo "export type { $1 } from './$1'" >> index.ts
cat <<EOT >> $1.ts
export type $1 = {
  
}
EOT

code index.ts
