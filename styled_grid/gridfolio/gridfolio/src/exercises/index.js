// Parent properties
import gridTemplateColumns from './parent/grid-template-columns';
import gridTemplateRows from './parent/grid-template-rows';
import justifyItems from './parent/justify-items';
import alignItems from './parent/align-items';
import placeItems from './parent/place-items';
import justifyContent from './parent/justify-content';
import alignContent from './parent/align-content';
import placeContent from './parent/place-content';
import gridAutoColumns from './parent/grid-auto-columns';
import gridAutoRows from './parent/grid-auto-rows';
import gridAutoFlow from './parent/grid-auto-flow';
import grid from './parent/grid';
import gridTemplateAreas from './parent/grid-template-areas';
import gridColumnGap from './parent/grid-column-gap';
import gridRowGap from './parent/grid-row-gap';
import gridGap from './parent/grid-gap';
// Child properties
import alignSelf from './child/align-self';
import gridArea from './child/grid-area';
import gridColumn from './child/grid-column';
import gridColumnEnd from './child/grid-column-end';
import gridColumnStart from './child/grid-column-start';
import gridRow from './child/grid-row';
import gridRowEnd from './child/grid-row-end';
import gridRowStart from './child/grid-row-start';
import justifySelf from './child/justify-self';
import placeSelf from './child/place-self';

export default {
	'grid-template-columns': gridTemplateColumns,
	'grid-template-rows': gridTemplateRows,
  'grid': grid,
  'justify-items': justifyItems,
	'align-items': alignItems,
	'place-items': placeItems,
	'justify-content': justifyContent,
	'align-content': alignContent,
	'place-content': placeContent,
	'grid-row-gap': gridRowGap,
	'grid-column-gap': gridColumnGap,
	'grid-gap': gridGap,
	'grid-auto-flow': gridAutoFlow,
	'grid-auto-columns': gridAutoColumns,
	'grid-auto-rows': gridAutoRows,
	'grid-template-areas': gridTemplateAreas,
	'align-self': alignSelf,
  'justify-self': justifySelf,
  'place-self': placeSelf,
	'grid-column': gridColumn,
	'grid-column-start': gridColumnStart,
	'grid-column-end': gridColumnEnd,
	'grid-row': gridRow,
	'grid-row-start': gridRowStart,
	'grid-row-end': gridRowEnd,
  'grid-area': gridArea,
}
