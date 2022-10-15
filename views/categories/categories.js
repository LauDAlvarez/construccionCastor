<!DOCTYPE html>
<html lang="en">
<%- include("../partials/head")%>
<%- include("../partials/header")%>
    <body>
        <section class="lista-productos">
            <%if(locals.category){%>
                <ul class="administrar-producto">
                    <% category.forEach( cat => { %>
                        <li><%= cat.name_category %></li>
                    <%})%>
                </ul>
            <%}%>           
            </section>
    </body>
<%- include("../partials/footer")%>
</html>