import { useCallback, useState } from 'react'

/**
 * Hook reutilizable para los formularios de autenticación.
 * Centraliza valores, errores, touched, estados de envío y feedback.
 */
export function useForm({ initialValues, validate, onSubmit, onSuccess }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState(null)

  const clearError = (name) => {
    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
  }

  const setValue = useCallback((name, value) => {
    setValues((current) => ({ ...current, [name]: value }))
    setFeedback(null)
    clearError(name)
  }, [])

  const handleChange = (name) => (event) => setValue(name, event.target.value)
  const handleCheckboxChange = (name) => (event) => setValue(name, event.target.checked)

  const handleBlur = (name) => () => {
    setTouched((current) => ({ ...current, [name]: true }))
    const result = validate(values)
    setErrors((current) => ({ ...current, [name]: result.errors[name] }))
  }

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
    setStatus('idle')
    setFeedback(null)
  }, [initialValues])

  const submit = async (event) => {
    event?.preventDefault()
    const result = validate(values)
    const allTouched = Object.keys(values).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {},
    )

    setTouched(allTouched)
    setErrors(result.errors)

    if (!result.isValid) {
      setStatus('invalid')
      return
    }

    setStatus('submitting')
    setFeedback(null)

    try {
      const response = await onSubmit(values)
      setStatus('success')
      setFeedback(response)
      onSuccess?.(response, values)
    } catch (error) {
      setStatus('error')
      setFeedback({
        severity: 'error',
        message: error?.message ?? 'No pudimos completar la operación. Inténtalo de nuevo.',
      })
    }
  }

  return {
    values,
    errors,
    touched,
    status,
    feedback,
    setValues,
    setFeedback,
    setStatus,
    setValue,
    handleChange,
    handleCheckboxChange,
    handleBlur,
    submit,
    reset,
  }
}
