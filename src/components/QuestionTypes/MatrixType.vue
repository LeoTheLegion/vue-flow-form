<template>
  <div class="f-matrix-wrap">
    <table 
      class="f-matrix-table"
      v-bind:class="{ 'f-matrix-multiple': question.multiple }"
    >
      <thead>
        <tr>
          <td></td>
          <th 
            v-for="(column, index) in question.columns"
            v-bind:key="'c' + index"
            class="f-table-cell f-column-cell"
          >
            <span class="f-table-string">{{ column.label }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(row, index) in question.rows"
          v-bind:key="'r' + index"
          class="f-table-row"
        >
          <td class="f-table-cell f-row-cell">
            <span class="f-table-string">{{ row.label }}</span>
          </td>
          <td
            v-for="(column, index) in question.columns"
            v-bind:key="'l' + index"
            v-bind:title="column.label"
            class="f-table-cell f-matrix-cell"
          >
            <div v-if="!question.multiple" class="f-field-wrap">
              <label class="f-matrix-field f-matrix-radio">
                <input
                  type="radio"
                  v-bind:ref="el => inputList.push(el)"
                  v-bind:name="row.id"
                  v-bind:id="'c' + index + '-' + row.id"
                  v-bind:aria-label="row.label"
                  v-bind:data-id="row.id"
                  v-bind:value="column.value"
                  v-model="selected[row.id]"
                  class="f-field-control f-radio-control"
                  v-on:change="onChange"
                />
                <span class="f-field-mask f-radio-mask">
                  <svg
                    viewBox="0 0 24 24"
                    class="f-field-svg f-radio-svg"
                  >
                    <circle r="6" cx="12" cy="12"></circle>
                  </svg>
                </span>
              </label>
            </div>
            <div v-else class="f-field-wrap">
              <label class="f-matrix-field f-matrix-checkbox">
                <input
                  type="checkbox"
                  v-bind:ref="el => inputList.push(el)"
                  v-bind:id="'c' + index + '-' + row.id"
                  v-bind:aria-label="row.label"
                  v-bind:data-id="row.id"
                  v-bind:value="column.value"
                  class="f-field-control f-checkbox-control"
                  v-model="selected[row.id]"
                  v-on:change="onChange"
                />
                <span class="f-field-mask f-checkbox-mask">
                  <svg
                    viewBox="0 0 24 24"
                    class="f-field-svg f-checkbox-svg"
                  >
                    <rect width="12" height="12" x="6" y="6"></rect>
                  </svg>
                </span>
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  /*
    Copyright (c) 2020 - present, DITDOT Ltd. - MIT Licence
    https://github.com/ditdot-dev/vue-flow-form
    https://www.ditdot.hr/en
  */

  import logic from '../../composables/QuestionTypes/MatrixType'

  export default logic
</script>
