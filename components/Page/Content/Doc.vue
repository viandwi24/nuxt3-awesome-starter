<template>
  <ContentDoc>
    <template #default="{ doc }">
      <PageHeader>
        <PageTitle :text="doc.title" />
      </PageHeader>
      <PageBody>
        <PageSection>
          <ContentRenderer :value="doc" />
        </PageSection>
      </PageBody>
    </template>
    <template #empty>
      <h1>Post in empty</h1>
    </template>
    <template #not-found>
      <Error :code="404" wrap />
    </template>
  </ContentDoc>
</template>
