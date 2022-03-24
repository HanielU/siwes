<script lang="ts">
  import { db, showDrawer } from "$lib/stores/db";
  import { generateIterableFromNum } from "$lib/utils/helpers";
  import ArrowLeftIcon from "../icons/ArrowLeftIcon.svelte";
  import ArrowRightIcon from "../icons/ArrowRightIcon.svelte";
  import PlusIcon from "../icons/PlusIcon.svelte";
  import SearchBar from "./SearchBar.svelte";
  import type { User } from "$lib/types";

  const columnTitles = [
    "Full Name",
    "Work Id",
    "Department",
    "Phone Number",
    "Serial Number",
    "Disc Code"
  ];

  const maxRows = 6; // max number of rows displayed per page
  let currentPageNum = 1;

  let searchInProcess = false;
  let queriedData = [];

  $: displayData = !searchInProcess ? $db : queriedData;
  $: pageCount = Math.ceil(displayData.length / maxRows); // number of pages to be paginated
  $: start = maxRows * (currentPageNum - 1); // calculate start index of shown rows
  $: end = start + maxRows; // calculate end index of shown rows
  $: paginatedItems = displayData.slice(start, end); // retrieve array of paginated data

  const toggleDrawer = () => showDrawer.set(true);

  function extractArrayValue(from: User) {
    const extracted = [];
    Object.entries(from).forEach(([key, value]) => extracted.push(value));
    return extracted;
  }
</script>

<section>
  <div class="wrapper">
    <div class="section-header">
      <h1>Records</h1>
      <button class="add-row" on:click={toggleDrawer}>
        <div class="icon">
          <PlusIcon />
        </div>
        Add
      </button>
    </div>

    <SearchBar
      on:search={e => ({ searching: searchInProcess, returned: queriedData } = e.detail)}
    />

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            {#each columnTitles as columnTitle}
              <th>
                <p>
                  {columnTitle}
                </p>
              </th>
            {/each}
          </tr>
        </thead>

        <tbody>
          {#each paginatedItems as userDataObj}
            <tr>
              {#each extractArrayValue(userDataObj) as userdata}
                <td>
                  <p>
                    {userdata}
                  </p>
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>

      {#if pageCount != 1}
        <div class="table-footer">
          <button
            class="btn prev"
            disabled={currentPageNum == 1 || pageCount == 1}
            on:click={() => currentPageNum--}
          >
            <div class="icon">
              <ArrowLeftIcon />
            </div>
            Previous
          </button>

          <div class="page-nums">
            {#each generateIterableFromNum(pageCount) as pageNum}
              <button
                on:click={() => (currentPageNum = pageNum)}
                class:active={currentPageNum == pageNum}
              >
                {pageNum}
              </button>
            {/each}
          </div>

          <button
            class="btn next"
            disabled={currentPageNum == pageCount || pageCount == 0}
            on:click={() => currentPageNum++}
          >
            Next
            <div class="icon">
              <ArrowRightIcon />
            </div>
          </button>
        </div>
      {/if}
    </div>
  </div>
</section>

<style lang="scss">
  section {
    padding: 50px 0;
  }

  .wrapper {
    width: 95%;
    min-width: 800px;
    max-width: 1200px;
    margin: auto;
    padding: 15px;
    // @include outline;
  }

  .section-header {
    width: 100%;
    display: flex;
    align-content: center;
    margin-bottom: 30px;
    @include flex(space-between);

    h1 {
      font-size: 26px;
      margin-right: 20px;
      font-weight: 500;
      line-height: 1.7;
    }
  }

  .add-row {
    padding: 12px 21px;
    border-radius: 8px;
    background: var(--accent);
    color: white;
    font-size: 14px;
    font-weight: 500;
    @include flex(flex-start);

    .icon {
      @include flex;
      margin-right: 5px;

      :global(svg) {
        stroke: white;
        stroke-width: 0.5;
        fill: white;
      }
    }
  }

  .table-wrapper {
    width: 100%;
    border-radius: 6px;
    border: 1px solid rgba(#515777, 0.2);
    overflow: hidden;
  }

  table {
    width: 100%;
    color: var(--gray-300);
    border-collapse: collapse;
  }

  thead tr {
    border-bottom: 1px solid rgba(#515777, 0.2);
  }

  th,
  td {
    width: 200px;
  }

  th p {
    display: flex;
    font-weight: 600;
    font-size: 14px;
  }

  th,
  td {
    padding: 15px;
  }

  tr {
    border-bottom: 1px solid rgba(#515777, 0.2);
  }

  .table-footer {
    padding: 10px 15px;
    @include flex(space-between);
  }

  .btn {
    padding: 8px 12px;
    border: 1px solid rgba(#515777, 0.2);
    border-radius: 8px;
    @include flex(flex-start);

    &.prev .icon {
      margin-right: 5px;
    }
    &.next .icon {
      margin-left: 5px;
    }

    &:disabled {
      background: rgba(#515777, 0.1);
      color: rgba(#515777, 0.4);

      &:focus {
        border-color: transparent;
      }

      .icon :global(svg) {
        fill: rgba(#515777, 0.2);
      }
    }

    .icon {
      @include flex;
      font-size: 14px;
      :global(svg) {
        fill: var(--gray-300);
        font-size: 18px;
      }
    }
  }

  .page-nums {
    display: flex;

    button {
      padding: 12px 18px;
      line-height: 1.1;
      background: inherit;
      border-radius: 8px;
      font-size: 16px;
      margin: 0 3px;

      &.active {
        background: var(--dark-accent);
      }
    }
  }
</style>
