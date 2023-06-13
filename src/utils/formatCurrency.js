// -> Utilizado para formatar valores
const formatcurrency = (value, currency) => {
  return value.toLocaleString('pt-br', { style: 'currency', currency })
}

export default formatcurrency