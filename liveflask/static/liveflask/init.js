///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// inits
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function init_inits(el) {
    let component_name = el.__liveflask['class']
    //el.__liveflask['children'] = attr_beginswith('data-component', el);
    let retrieved_inits = attr_beginswith('data-init', el);
    el.__liveflask['inits'] = [];
    let current_component;

    retrieved_inits.forEach(i => {
        current_component = i.parentNode.closest('[data-component]').getAttribute("data-component");
        if (current_component !== component_name) return;
        el.__liveflask['inits'].push(i)
    })


    el.__liveflask['inits'].forEach((i, index) => {
        let property;
        let value;
        let modifier;
        [property, modifier, value] = get_model_prop_value(i, "data-init")

        send_request(el, {update_property: [property.split("|")[1], $(i).val()]}, i)
    })

}
