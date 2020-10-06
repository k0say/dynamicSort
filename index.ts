import { of } from 'rxjs'; 
import { map, filter } from 'rxjs/operators';

let origin = ['a', 'b']
let res: Array<{field: string, operator: string, value: string}> = [
  {field: 'b', operator: 'ciao', value: 'nonono'},
  {field: 'a', operator: 'ciao', value: 'nonono'},
  {field: 'a', operator: 'ciao', value: 'nonono'},
  {field: 'a', operator: 'ciao', value: 'nonono'},
]

/**
 * Function to sort alphabetically an array of objects by some specific key.
 * 
 * @param {String} property Key of the object to sort.
 */
function dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
}

this.apiService.filters_GetFilter(this.filterSelected.id).subscribe(response => {
          orderedFilter = response.filters.sort(this.helpers.dynamicSort("field"))
          this.filterId = this.filterSelected.id;
          this.getFilter();
          if(response.filters.length > 0)  {
            let reducedFilter = orderedFilter.reduce( (acc, obj) => {
              let key = obj['field'];
              if (!acc[key]) {
                acc[key] = [];
              }
              acc[key].push(Helpers.getFilterOperator(obj.operator) + ` '${Helpers.getFilterValue(obj.value)}'`);
              return acc;
            }, {});
            
            let index = 0;
            let value = '';
            for(let field in reducedFilter) {
              if (index === 0) {
                value += Helpers.getFilterField(field) + ` ${reducedFilter[field]}`
              } else {
                value += ' e ' + Helpers.getFilterField(field) + ` ${reducedFilter[field]}`;
              }
              index++;
            }
            this.filterUsed = value.replace(/,/g, ' o ');
          }

          this.getItemGrid(this.filterId);
        })

const distinct = [...new Set(res.map(x => x.field))]
console.log(distinct)

console.log(res.sort(dynamicSort("field")))