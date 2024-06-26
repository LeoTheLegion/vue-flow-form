/*
Copyright (c) 2020 - present, DITDOT Ltd. - MIT Licence
https://github.com/ditdot-dev/vue-flow-form
https://www.ditdot.hr/en
*/

import TextType from '../../components/QuestionTypes/TextType.vue'
import LanguageModel from '../../models/LanguageModel'
import { QuestionType } from '../../models/QuestionModel'

export default {
  extends: TextType,
  name: QuestionType.Phone,
  data() {
    return {
      inputType: 'tel', 
      canReceiveFocus: true
    }
  }
}