- <a href="#"></a>: back to the top of the page
- <a href="" download></a>: create a download link
- <a href="tel: 55555555"></a>
- <a href="" target="_blank"></a> the link will be opened in a new tab
- <a href="/"></a>: back to the homepage. / means it'll be the root page
- <nav aria-label="primary-navigation"></nav>: if you have more than one nav, it is important to label them
- <nav aria-labelledby=""></nav>: points to an id of for example an h1 element. Labelledby can not stand alone without a refered-to id. The aria-labelledby attribute identifies the element (or elements) that labels the element it is applied to. The aria-labelledby attribute identifies the element (or elements) that labels the element it is applied to.

- <form action="" method="get/post"></form>
- <input type="password/tel/text">
- <input name="">: name attribute identifies the element at a server level
- <input autocomplete="on">: autocomplete remembers and suggests the last input
- <input required>
- <input autofocus>
- <input type="tel" placeholder="55555555" pattern="[0-9]{10}">: set the required pattern of the numeric input
- <input type="number" name="decade" id="decade" min="1950" max="2020" step="10" value="1980">
- <button type="reset"></button>
- <button type="submit" formaction="http://..." formmethod="post"></button>:
    The formaction attribute specifies where to send the form-data when a form is submitted, it overrides the form's action attribute.
    The formmethod attribute defines the HTTP method for sending form-data to the action URL, it overrides the method attribute of the <form> element.
- <select name="coffee" id="coffee" multiple size="3">
    <optgroup label="coffees">
      <option value="coffee1"></option>
      <option value="coffee2"></option>
      <option value="coffee3"></option>
    </optgroup>
    <optgroup label="otherDrinks">
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </optgroup>
  </select>
- <datalist>
    <option value="coffee1"></option>
    <option value="coffee2"></option>
    <option value="coffee3"></option>
  </datalist>
- For the select element, the user is required to select one of the options you've given. 
  For the datalist element, it is suggested that the user select one of the options you've given, but he can actually enter anything he wants in the input.
- <fieldset>
    <legend></legend>
    <input type="text">
    <label for=""></label>
    <input type="text">
    <label for=""></label>
  </fieldset>

- <table>
  <tr>
    <th scope="row"></th>: this table head refers to the row
    <th scope="col"></th>: this table head refers to the column
  </tr>
  <tr>
    <td rowspan="3"></td>
    <td colspan="2"></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>
- <table>
  <caption></caption>
  <thead></thead>
  <tbody></tbody>
  <tfoot></tfoot>
</table>

- <dl></dl>: description list
- <dt></dt>: description item
- <dd></dd>: description detail
- <ol start="3"></ol>: ordered list start at 3
- <ol reverse></ol>: ordered list with reversed order
- <details>
    <summary></summary>
    <p></p>
  </details>
  
- <img src="" alt="" loading="lazy">: browser loads images only when it needs to
- <figure>: figure can not only used for img but also for p
    <img src="" alt="">
    <figcaption></figcaption>: a figcaption could either be the first or the last element in figure
  </figure>

- <aside></aside>: for sidebar
- <address></address>
- <time datetime="08:00">8am</time>
- <time datetime="PT3H">3 hours</time>
- <article></article>
- <cite></cite>: quote in kursiv form
- <q></q>: quote with quotation marks around it
- <u></u>: underlined text
- <mark></mark>: highlighted text
- <abbr title="create a tooltip when mousing over it"></abbr>
- <code></code>
- <hr>

- You can wrap input and its label in an p element to make them appear on one seperate line
- Don't send sensitive information using get request, since everything that you send shows in the urls
- insertAdjacentHTML('beforeend', HTMLString)
- for of loop:
  for (const element of elementArray) {
    console.log(element);
  }

