# Flask-MonoCrud

The Admin Model is a core component of the admin panel generator that provides a flexible framework for managing different resources within the admin panel. This documentation provides a detailed understanding of the Admin Model and its associated methods and attributes.

## Class Structure
The Admin Model class serves as a base class for specific admin models, providing a set of common functionalities. It includes the following attributes and methods:


## Attributes
`menu_icon`: Specifies the icon to be displayed for the admin model in the menu. \
`navigation_label`: Specifies the label for the navigation item associated with the admin model. \
`preview_field`: Indicates the field to be used for previewing records. \
`edit_field`: Indicates the field to be used for editing records. \
`model_label`: Specifies the label for the model.
`table_polling`: Enables or disables table polling for real-time updates. Set it to True to enable table polling or False to disable it. \
`poll_interval`: Specifies the polling interval in seconds. Adjust this value according to your requirements.`

## Header Metrics
The `get_header_metrics()` method allows you to retrieve and render header metrics for the admin model. Use this method to display statistical information or key metrics related to the resource. Customize the implementation of this method to provide meaningful and relevant metrics.

## Fillable Form Fields
The `get_fillable()` method returns a list of form components that are used for creating or editing records. Customize this method to define the form fields specific to the admin model. The form components can include text inputs, checkboxes, dropdowns, or any other relevant form elements.

## Table Columns
The `get_table_columns()` method returns a list of table columns that define the presentation of records in the admin panel. Customize this method to specify the columns that should be displayed for the admin model. Each column can represent a specific attribute or property of the resource. Consider using appropriate column types, such as text columns, numeric columns, boolean columns, or date columns, depending on the nature of the data being displayed.

## Related Resources
The `get_relations()` method allows you to define related resources for the admin model. Use this method to specify any resources that are associated with the current model. For example, if the admin model represents users, related resources could include roles, permissions, or user groups. Customize the implementation of this method to return the appropriate list of related resources.

## Operations Hooks
The Admin Model provides hooks that allow you to perform operations before and after creating or editing records. These hooks enable you to modify or validate data before it is saved, as well as perform any additional actions required after the record is created or edited. Implement the `before_create()`, `after_create()`, `before_edit()`, and `after_edit()` methods to customize the behavior as needed.

## Permissions
The Admin Model includes permission methods that determine user access privileges for various operations related to the admin model. Implement the permission methods such as `can_list()`, `can_view()`, `can_edit()`, `can_create()`, `can_delete()`, `can_export()`, `can_import()`, and `can_filter()` based on your specific authorization requirements. These methods should return True or False based on the user's permissions.

This technical documentation provides a comprehensive understanding of the Admin Model and its functionalities. Refer to this documentation when working with the admin panel generator to effectively manage resources within the admin panel.


### Example Usage

```

class AdminModel:
    menu_icon = ""  # Icon for the admin model in the menu
    navigation_label = ""  # Label for the navigation item
    preview_field = ""  # Field used for previewing records
    model_label = ""  # Label for the model
    table_polling = False  # Enable or disable table polling for real-time updates
    poll_interval = 1  # Polling interval in seconds

    def get_header_metrics(self):
        # Retrieve and render header metrics for the admin model
        pass

    def get_fillable(self):
        # Return a list of form components for creating or editing records
        pass

    def get_table_columns(self):
        # Return a list of table columns to display records
        pass

    def get_relations(self):
        # Return a list of related resources for the admin model
        pass

    def before_create(self, data):
        # Perform operations before creating a record
        return data

    def after_create(self, model):
        # Perform operations after creating a record
        return model

    def before_edit(self, data):
        # Perform operations before editing a record
        return data

    def after_edit(self, model):
        # Perform operations after editing a record
        return model

    # Permissions
    def can_list(self) -> bool:
        # Check if the user has permission to list records
        pass

    def can_view(self) -> bool:
        # Check if the user has permission to view a record
        pass

    def can_edit(self) -> bool:
        # Check if the user has permission to edit a record
        pass

    def can_create(self) -> bool:
        # Check if the user has permission to create a record
        pass

    def can_delete(self) -> bool:
        # Check if the user has permission to delete a record
        pass

    def can_export(self) -> bool:
        # Check if the user has permission to export records
        pass

    def can_import(self) -> bool:
        # Check if the user has permission to import records
        pass

    def can_filter(self) -> bool:
        # Check if the user has permission to filter records
        pass

```


# API Reference

**after_table_content:**
   - *Description:* Represents content that appears after a table in a user interface or document. This content could include additional information, summaries, or actions related to the data displayed in the table.

**before_edit_actions_hook:**
   - *Description:* Represents actions or operations that are executed before initiating the editing process. These actions may involve validations, permissions checks, or data preparations required prior to allowing edits.

**before_table_content:**
   - *Description:* Represents content that precedes a table in a user interface or document. This content might include introductory text, headings, or other elements designed to provide context or instructions related to the data presented in the table.

**display_in_nav:**
   - *Description:* A flag or setting indicating whether an item, such as a page or section, should be displayed in the navigation menu of a user interface. When enabled, the item will be visible and accessible within the navigation structure.

**edit_field:**
   - *Description:* Method or functionality used to modify or edit a specific field within a dataset or form. This could involve providing users with interfaces or controls to update the content of individual fields.

**get_create_view_heading:**
   - *Description:* Method to retrieve or generate the heading/title for a view used in the creation of new items or records. This heading typically provides users with context or guidance regarding the purpose of the view.

**get_create_view_redirect_url:**
   - *Description:* Method to determine the URL to which users should be redirected after successfully creating a new item or record. This URL typically points to a relevant page or resource related to the newly created content.

**get_create_view_title:**
   - *Description:* Method to retrieve or generate the title for a view used in the creation of new items or records. This title is typically displayed prominently at the top of the view to indicate its purpose or context.

**get_edit_view_heading:**
   - *Description:* Method to retrieve or generate the heading/title for a view used in the editing of existing items or records. This heading usually provides users with context or guidance regarding the purpose of the edit view.

**get_edit_view_redirect_url:**
   - *Description:* Method to determine the URL to which users should be redirected after successfully editing an existing item or record. This URL typically points to a relevant page or resource related to the edited content.

**get_edit_view_title:**
   - *Description:* Method to retrieve or generate the title for a view used in the editing of existing items or records. This title is typically displayed prominently at the top of the view to indicate its purpose or context.

**get_fillable:**
   - *Description:* Method to retrieve a list of fields or attributes that can be filled or updated when creating or editing items or records. This typically involves returning a subset of fields from the entire dataset that are editable by users.

**get_header_metrics:**
   - *Description:* Method to retrieve or calculate metrics or summary statistics related to the header section of a user interface or document. These metrics may include counts, totals, or other relevant information displayed in the header area.

**get_list_view_heading:**
   - *Description:* Method to retrieve or generate the heading/title for a view used to display a list of items or records. This heading typically provides users with context or guidance regarding the content displayed in the list view.

**get_list_view_title:**
   - *Description:* Method to retrieve or generate the title for a view used to display a list of items or records. This title is typically displayed prominently at the top of the view to indicate its purpose or context.

**get_preview_view_heading:**
   - *Description:* Method to retrieve or generate the heading/title for a preview view. This view typically provides users with a preview of an item or record before it is created or saved.

**get_relations:**
   - *Description:* Method to retrieve information about relationships or connections between different data entities or records. This may include associations, dependencies, or hierarchies between related items.

**get_table:**
   - *Description:* Method to retrieve or generate the table structure used to display data in a user interface. This typically involves fetching metadata or configuration settings defining the columns, rows, and formatting of the table.

**get_table_actions:**
   - *Description:* Method to retrieve a list of actions or operations that can be performed on the table or its contents. These actions may include sorting, filtering, exporting, or other manipulations of the data displayed in the table.

**get_table_filters:**
   - *Description:* Method to retrieve a list of filters or criteria that can be applied to the data displayed in the table. These filters allow users to narrow down the displayed data based on specific attributes or conditions.

**get_table_tabs:**
   - *Description:* Method to retrieve or generate tabs or tabs configuration used to organize or navigate different sections or views within a table-based interface. These tabs typically represent distinct sets of data or functionalities.

**menu_icon:**
   - *Description:* Icon associated with a menu item or navigation element in a user interface. This icon is typically displayed alongside the item's label in the navigation menu to provide visual cues or identifiers.

**navigation_label:**
   - *Description:* Label or text associated with a navigation item in a user interface. This label is typically displayed in the navigation menu to indicate the name or purpose of the linked resource or page.

**per_page:**
   - *Description:* Number of items or records displayed per page in a paginated user interface. This setting determines the pagination behavior, controlling the amount of content visible at once before requiring users to navigate to subsequent pages.

**per_page_options:**
   - *Description:* Options or choices available for users to customize the number of items displayed per page in a paginated user interface. These options typically provide users with flexibility in adjusting the pagination settings according to their preferences or needs.

**preview_field:**
   - *Description:* Field or attribute used for displaying a preview of an item or record in a user interface. This field is typically selected or configured to provide users with a concise overview or summary of the item's content.

**show_column_borders:**
   - *Description:* Flag or setting indicating whether column borders should be displayed in a table-based user interface. When enabled, column borders provide visual separation between adjacent columns, improving readability and aesthetics.

**table_click_action:**
   - *Description:* Action or behavior triggered when a user clicks on a table element in a user interface. This action may include opening a detail view, executing a specific operation, or navigating to another page based on the clicked item.

**table_polling:**
   - *Description:* Settings or configurations related to polling or refreshing data displayed in a table-based user interface. This feature may automatically update the table content at regular intervals to reflect real-time changes or new data.

**table_polling_interval:**
   - *Description:* Time interval between successive polling or data refresh cycles in a table-based user interface. This interval determines how frequently the table content is updated to reflect changes or new information.
