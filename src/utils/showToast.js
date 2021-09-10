export default function (toast, status, description) {
  return toast.show({
    placement: 'top-right',
    title: 'Shoes Store',
    status: status,
    description: description,
    position: 'relative',
    right: -32,
    top: -50,
    width: 360,
  });
}
