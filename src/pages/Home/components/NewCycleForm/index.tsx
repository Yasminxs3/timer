import { useFormContext } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../..'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        placeholder="dê um nome para o seu projeto"
        list="taskSugestions"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="taskSugestions">
        <option value="projeto 1"> Projeto 1</option>
      </datalist>
      <label htmlFor="minutes">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutes"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutes', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
