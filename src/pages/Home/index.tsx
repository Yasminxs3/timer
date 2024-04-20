import { Play } from 'phosphor-react'
import {
  Button,
  CountContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            placeholder="dê um nome para o seu projeto"
            list="taskSugestions"
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
          />
          <span>minutos.</span>
        </FormContainer>
        <CountContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountContainer>
        <Button type="submit">
          <Play size={24} /> Começar
        </Button>
      </form>
    </HomeContainer>
  )
}
