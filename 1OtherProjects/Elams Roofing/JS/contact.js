$(document).ready(function() {
    let array = [
      { name: "Roof Repair", id: "1" },
      { name: "Roof Install", id: "2" },
      { name: "Gutter Cleaning", id: "3" },
      { name: "General Roofing", id: "4" }
    ];

    
    function generateDropdown(list, id, name, placeholder) {
      $(document).off("click", ".dropdown__value");
      $(document).on("click", ".dropdown__value", function() {
        $(this).toggleClass("open");
      });

      $(document).on("click", "input[type='checkbox'][name='" + name + "']", function() {
        let checked = [];
        $("input[type='checkbox'][name='" + name + "']:checked").each(function() {
          checked.push($(this).val());
        });
        console.log(checked);
        localStorage.setItem("services", checked);
  
        $("#" + id + " .dropdown__value span").text(
          Object.keys(checked).length == 0
            ? placeholder
            : Object.keys(checked).length > 1
            ? Object.keys(checked).length + " " + name
            : checked[Object.keys(checked)[0]]
        );
      });
      $(document).mouseup(function(e) {
        let dropdown = $("#" + id + " .dropdown__value");
  
        if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0 && !$("#" + id + " .dropdown__list").is(e.target) && $("#" + id + " .dropdown__list").has(e.target).length === 0) {
          $("#" + id + " .dropdown__value").removeClass("open");
        }
      });
      $("#" + id).append(dropdownHtml(name, list, placeholder));
    }
    function dropdownHtml(name, list, placeholder) {
      let output = ``;
      list.forEach(element => {
        output += ` <div class="form__checkbox">
                          <input class="form__checkbox_input"  value="${element["name"]}"  name="${name}"  id="${element["id"]}"  type="checkbox">
                          <label class="form__checkbox_label" for="${element["id"]}">
                              <div class="form__checkbox_button"></div>
                              <div>${element["name"]}</div>
                          </label>
                      </div>`;
      });
      return `    <div class="dropdown">
                      <div class="dropdown__value">
                          <span>${placeholder}</span>
                          <div class="arrow"></div>
                      </div>
                      <div class="dropdown__list">${output}</div>
                  </div>`;
    }
    generateDropdown(array, "services-selector", "services selected", "Choose one or Multiple");
  });
  