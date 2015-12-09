{% extends 'newtype:page/layout.tpl' %}

{% block content %}
    {% widget "newtype:widget/welcome/welcome.tpl"%}
    {% widget "newtype:widget/search/search.tpl"%}
    {% widget "newtype:widget/search/result/result.tpl"%}
{% endblock %}
