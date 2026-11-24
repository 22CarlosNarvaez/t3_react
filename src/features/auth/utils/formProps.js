/** Traduce el estado de `useForm` a props de TextField de forma consistente. */
export const fieldProps = (form, name, disabled = false) => ({
  value: form.values[name],
  onChange: form.handleChange(name),
  onBlur: form.handleBlur(name),
  error: Boolean(form.touched[name] && form.errors[name]),
  helperText: form.touched[name] ? form.errors[name] : '',
  disabled,
})
