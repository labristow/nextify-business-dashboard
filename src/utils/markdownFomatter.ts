const markdownFormatter = (message: string) => {
  const h1_pattern = /#(.*?)\n/g;
  const h2_pattern = /\#\#(.*?)\n/g;
  const h3_pattern = /\#\#\#(.*?)\n/g;
  const h4_pattern = /\#\#\#\#(.*?)\n/g;
  const h5_pattern = /#\#\#\#\#(.*?)\n/g;
  const h6_pattern = /\#\#\#\#\#\#(.*?)\n/g;

  const anchor_pattern = /\[(.*?)\]\((.*?)\)/g; // [This is link](https://www.link.com)
  const hr_pattern = /\_\_\_/g; // ___ for horizaontal rule hr
  const ul_pattern = /--\s?((.*?))(?=\n|$)/g;

  const bold_pattern = /\*(.*?)\*/g;
  const italic_pattern = /\_(.*?)\_/g;
  const nextline_pattern = /\n(.*?)/g;

  message = message.replaceAll(
    ul_pattern,
    `<li style="margin: 1px 0;color: red">$1</li>`
  );
  message = message.replaceAll(hr_pattern, `<hr style="margin: 8px 0"/>`);
  message = message.replaceAll(
    anchor_pattern,
    `<a href=$2 style="text-decoration: underline">$1</a>`
  );
  message = message.replaceAll(
    h6_pattern,
    `<h6 style="font-size: 14px;font-weight: 600;">$1</h6>`
  );
  message = message.replaceAll(
    h5_pattern,
    `<h5 style="font-size: 18px;font-weight: 600;">$1</h5>`
  );
  message = message.replaceAll(
    h4_pattern,
    `<h4 style="font-size: 20px;font-weight: 600;">$1</h4>`
  );
  message = message.replaceAll(
    h3_pattern,
    `<h3 style="font-size: 24px;font-weight: 600;">$1</h3>`
  );
  message = message.replaceAll(
    h2_pattern,
    `<h2 style="font-size: 30px;font-weight: 600;">$1</h2>`
  );
  message = message.replaceAll(
    h1_pattern,
    `<h1 style="font-size: 36px;font-weight: 600;">$1</h1>`
  );

  message = message.replaceAll(bold_pattern, `<b>$1</b>`);
  message = message.replaceAll(italic_pattern, `<i>$1</i>`);
  message = message.replaceAll(nextline_pattern, `<br/>$1`);

  return message;
};
export default markdownFormatter;

// const markdownFormatter = (message: string) => {
//   // Define regular expressions for *bold* and _italic_ patterns
//   const h1_pattern = /\*(.*?)\*/g;
//   const h2_pattern = /\*\*(.*?)\*\*/g;
//   const h3_pattern = /\*\*\*(.*?)\*\*\*/g;
//   const h4_pattern = /\*\*\*\*(.*?)\*\*\*\*/g;
//   const h5_pattern = /\*\*\*\*\*(.*?)\*\*\*\*\*/g;
//   const h6_pattern = /\*\*\*\*\*\*(.*?)\*\*\*\*\*\*/g;
//   const i_pattern = /_(.*?)_/g;
//   // const p_pattern =

//   const header_pattern = /\*\*(.*?)\*\*/g;
//   const italic_pattern = /_(.*?)_/g;
//   const paragraph_pattern = /\*(.*?)\*/g;
//   const olPattern = /\+\+((?:.*(?:\r\n|\r|\n|$))*)\+\+/g;
//   const ulPattern = /\+\+(.*?)\+\+/g;
//   //   const listItemPattern = /(?:\+\+|\-\-)(.*?)(?:\+\+|\-\-)/g;

//   // Replace **header** with <h4>bold</h4>
//   message = message.replaceAll(header_pattern, "<h5><br/><b>$1</b></h5><br/>");
//   // Replace *paragraph* with <p>bold</p>
//   message = message.replaceAll(paragraph_pattern, "<p>$1</p>");
//   // Replace _italic_ with <i>italic</i>
//   message = message.replaceAll(italic_pattern, "<i>$1</i>");
//   // Replace --some text-- with <ul>unordered list</ul>
//   message = message.replaceAll(
//     ulPattern,
//     "<li className='text-red-500'>$1</li><br/>"
//   );
//   // Replace ++some text++ with <ol>ordered list</ol>
//   message = message.replaceAll(olPattern, "<ol>$1</ol>");
//   // Replace -some text- with <li>italic</li>
//   //   message = message.replaceAll(listItemPattern, "<li>$1</li>");

//   return message;
// };

// export default markdownFormatter;
